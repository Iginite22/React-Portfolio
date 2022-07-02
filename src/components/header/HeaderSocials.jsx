import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
export const HeaderSocials = () => {
  
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/abhay-thakur-075b83212/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Iginite22" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/abhaythakur_22" target="_blank"><BsTwitter/></a>
    </div>
 )
}
export default HeaderSocials