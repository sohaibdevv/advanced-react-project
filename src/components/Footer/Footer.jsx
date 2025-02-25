import React from 'react';
import "./Footer.css";
import { FaLinkedin, FaMediumM} from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer">
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-white'>Feel Free to contact ☎</h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href = "https://www.linkedin.com/in/sohaibmalikdev/" target="_blank" rel="noopener noreferrer"  className='text-white'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/sohaibdevv" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@sohaibmalikdev"  target="_blank" rel="noopener noreferrer"  class="text-white">
                            <FaMediumM />
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