import React from 'react'
import './About.css'
import ME from '../../assets/me.jpeg'
import {TbAward} from 'react-icons/tb'
import {TbBallVolleyball} from 'react-icons/tb'
import {AiOutlineFolderOpen} from 'react-icons/ai'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
      

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Recommendation</h5>
              <small>NDA-145</small>
            </article>
            <article className='about__card'>
              <TbBallVolleyball className='about__icon'/>
              <h5>Volleyball</h5>
              <small>Zonal Level</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>ReactJs</h5>
              <small>FrontEnd Development</small>
            </article>
          </div>

          <p>
            Computer Engineering undergraduate(2nd year) student from Delhi Technological University. Expertised in Data Structures and Algorithms and Front-End Development. Seeking and entry level position as Software Engineer Intern.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About