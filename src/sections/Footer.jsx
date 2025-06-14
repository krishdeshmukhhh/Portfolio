import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a target="_blank" href="https://oia.osu.edu/news/2024/12/09/student-spotlight-krish-deshmukh">Visit my blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.name}>
                            <img src={img.imgPath}/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Krish | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
