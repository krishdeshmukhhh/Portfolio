import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SimplePillNav = ({
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${D - delta}px`
        });

        const tl = gsap.timeline({ paused: true });
        const hoverLabel = pill.querySelector('.pill-label-hover');
        const normalLabel = pill.querySelector('.pill-label');

        tl.to(circle, {
          scale: 1,
          duration: 0.2,
          ease
        }, 0);

        if (hoverLabel && normalLabel) {
          tl.to(hoverLabel, {
            yPercent: 0,
            opacity: 1,
            duration: 0.2,
            ease
          }, 0);
          tl.to(normalLabel, {
            yPercent: -100,
            opacity: 0,
            duration: 0.2,
            ease
          }, 0);
        }

        tlRefs.current[circleRefs.current.indexOf(circle)] = tl;
      });
    };

    const onResize = () => layout();
    layout();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease]);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
    ['--nav-h']: '42px',
    ['--pill-pad-x']: '18px',
    ['--pill-gap']: '3px'
  };

  return (
    <div className={`relative ${className}`} style={cssVars}>
      <ul
        role="menubar"
        className="list-none flex items-stretch m-0 p-[3px] h-full rounded-full"
        style={{ 
          gap: 'var(--pill-gap)',
          height: 'var(--nav-h)',
          background: 'var(--base, #000)'
        }}>
        {items.map((item, i) => {
          const isActive = activeHref === item.href;

          const pillStyle = {
            background: 'var(--pill-bg, #fff)',
            color: 'var(--pill-text, var(--base, #000))',
            paddingLeft: 'var(--pill-pad-x)',
            paddingRight: 'var(--pill-pad-x)'
          };

          const basePillClasses =
            'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

          return (
            <li key={item.href} role="none" className="flex h-full">
              <a
                role="menuitem"
                href={item.href}
                className={basePillClasses}
                style={pillStyle}
                aria-label={item.ariaLabel || item.label}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}>
                <span
                  className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                  style={{
                    background: 'var(--base, #000)',
                    willChange: 'transform'
                  }}
                  aria-hidden="true"
                  ref={el => {
                    circleRefs.current[i] = el;
                  }} />
                <span className="label-stack relative inline-block leading-[1] z-[2]">
                  <span
                    className="pill-label relative z-[2] inline-block leading-[1]"
                    style={{ willChange: 'transform' }}>
                    {item.label}
                  </span>
                  <span
                    className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                    style={{
                      color: 'var(--hover-text, #fff)',
                      willChange: 'transform, opacity',
                      transform: 'translateY(100%)',
                      opacity: 0
                    }}
                    aria-hidden="true">
                    {item.label}
                  </span>
                </span>
                {isActive && (
                  <span
                    className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                    style={{ background: 'var(--base, #000)' }}
                    aria-hidden="true" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SimplePillNav;