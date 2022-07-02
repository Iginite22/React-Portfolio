import React from 'react'
import './Footer.css'
import {GrInstagram} from 'react-icons/gr'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'


export const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Abhay Thakur</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Education</a></li>
        <li><a href="#testimonial">Coding Platforms</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/abhaythakur_22"><BsTwitter className='icon'/></a>
        <a href="https://www.linkedin.com/in/abhay-thakur-075b83212/"><AiFillLinkedin className='icon'/></a>
        <a href="https://www.instagram.com/abhay__pb07/"><GrInstagram className='icon'/></a>
      </div>

    <div className="footer__copyright">
      <small>&copy; Abhay Thakur. All rights reserved</small>
    </div>
    </footer>
  )
}
export default Footer