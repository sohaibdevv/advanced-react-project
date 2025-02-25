import React from 'react';
import "./Footer.css";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer">
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-brown'><span className='text-white'>Feel free to contact ☎</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href = "https://www.linkedin.com/in/sohaibmalikdev/" className='text-white'>
                        <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href = "https://github.com/sohaibdevv" className='text-white'>
                        <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href = "https://medium.com/@sohaibmalikdev" className='text-white'>
                        <SiMedium />
                        </a>
                    </li>
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2025</p>
            </div>
        </div>
    </div>
  )
}

export default Footer