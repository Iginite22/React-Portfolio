import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Competitive Programming</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__others">
          <h3>Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>LeetCode</h4>
                <small className="text-light">400+ questions</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Codechef</h4>
                <small className="text-light">Max Rating-1619</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Data structures and Algorithms</h4>
                <small className="text-light">1+year</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Elixir-DTU</h4>
                <small className="text-light">Design Team</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>ChemisTree-DTU</h4>
                <small className="text-light">Design-CoHead</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Engifest-DTU</h4>
                <small className="text-light">Logistics-CoHead</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience