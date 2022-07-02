import React from 'react'
import './Services.css'
export const Services = () => {
  return (
    <section id='services'>
      <h2>Education</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>10th class</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>-  ST Paul's Convent School, Dasuya, Punjab  (2018).</p>
            </li>
            <li>
              <p>-  ICSE</p>
            </li>
            <li>
              <p>-  Subjects-History-Civics and  Geography, Maths, Science, English, Punjabi, Hindi and Physical Education</p>
            </li>
            <li>
              <p>-  78%</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>12th class</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>-  Jagat Jyoti Public School, Usman Shahid, Dasuya, Punjab (2020).</p>
            </li>
            <li>
              <p>-  CBSE</p>
            </li>
            <li>
              <p>-  Maths, Physics, Chemistry, Physical Education and English.</p>
            </li>
            <li>
              <p>-  92.6%</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>B.Tech</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>-  Delhi Technological University-(<b>Present</b>).</p>
            </li>
            <li>
              <p>-  Computer Engineering</p>
            </li>
            <li>
              <p>-  9.09 CGPA till 4th semester.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default Services