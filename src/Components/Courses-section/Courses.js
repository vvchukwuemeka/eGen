import React from 'react'
import { Container } from 'reactstrap'
import './Courses.css'
import CourseCard from './CourseCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel"


const coursesData = [
  {
    id: '01',
    title : '11 Plus',
    lesson: '11 + is a standard exams for those below 11 years before entering grammer school.',
  },
  {
    id: '02',
    title : 'A Levels',
    lesson: 'A Levels is a standard exams for those those who recently finished grade 11 to prepared them for university education.',
  },
  {
    id: '03',
    title : 'Advanced Mathematics',
    lesson: 'We teach Advanced Mathematics helping students pass their A level exmas and college to further their education in the Uni.',
  },

  {
    id: '04',
    title : 'Advanced Engineering',
    lesson: 'This course enable students to be prepared for their carerre in Engineering profession.',
  },
    
]

const Courses = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToscroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToshow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToshow: 0,
          slidesToScroll: 0
        }
      }
    ]
  }
  return (
    <Container>

      <div className='course_content mx-auto flex flex-col justify-col max-w-sm'>
        <h1 className='text-left text-2x1 font-bold my-12'>Our Courses </h1>

      </div>

      <Slider {...settings}>
       
       { coursesData.map(item => (
        <CourseCard key={item.id} item={item} />
       ))}
      </Slider>

    </Container>
    
  )
}

export default Courses