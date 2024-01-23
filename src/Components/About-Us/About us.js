import React from 'react'
import './About.css'
import { Container, Row, Col } from 'reactstrap'

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
              <div className='about_content'>
                <h2>About Us</h2>
                <p>e-Gen is learning platform developed for people preparing for 11 Plus exams, GCSE, 
                  A Levels, Advanced Mathematics and Advanced Engineering Mathematics to learn and 
                  pass in their first attemp with good grades.               
                </p>
                </div> 

          </Col>

          <Col lg='6' md='6'>
            <div className='about_img'>
            <img src="./images/offer.png" alt="offer" className='w-100'/>


            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default About