import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/leetcode.png'
import AVTR2 from '../../assets/codechef.png'
import AVTR3 from '../../assets/codeforces.png'
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data=[
  {
    avatar:AVTR1,
    platform: 'leetcode',
    review:'400+ question and highest contest rating of 1600.',
    link:'https://leetcode.com/Ignite_2002/'
  },
  {
    avatar:AVTR2,
    platform: 'Codechef',
    review:'Having maximum contest rating of 1619 and just beginner in competitive programming.',
    link:'https://www.codechef.com/users/iginite22'
  },
  {
    avatar:AVTR3,
    platform: 'Codeforces',
    review:'Holding a newbie postion at codeforces and stepping towards competitive programming.',
    link:'https://codeforces.com/profile/Iginite22'
  }
]


export const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>My</h5>
      <h2>Coding Platforms</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,platform,review,link},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                  <div className="platform__avatar">
                    <img src={avatar}/>
                  </div>
                  <h4 className="platform__name">{platform}</h4>
                  <small className="platform__profile">
                    {review}
                  </small>
                  <a href={link} className='btn button'>Profile</a>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default Testimonial