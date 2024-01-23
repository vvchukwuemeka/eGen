import React from 'react';
import {  Container, Row, Col } from "reactstrap"
import "./Hero.css";


const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero_section'>
              <h1 className='mb-4'>
                <span className='e-green'>eGen</span>- Learn
                <br /> 11 Plus,GCSE, A Levels <br /> From Anywhere in the World
              </h1>
              <p className='mb-4'>With the best and seasoned tutors and guaranteed pass rate.</p>

              <div className='search'>
                <img src="./images/searchIcon.png" alt="search" className='searchImg'/>
                <input type="text" placeholder='Find a Course' />
                <button className='btn-search'>SEARCH FOR COURSES HERE</button>

              </div>

            </div>
          
          </Col>

          <Col lg='6' md='6'>
            <img src="./images/heroimg.png" alt="hero" className='w-100'/>
          
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Hero