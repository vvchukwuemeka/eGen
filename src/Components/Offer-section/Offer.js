import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Offer.css';


const offer = () => {
  return (
    <section>
      <Container>
        <Row>

    <Col lg='6' md='6'>
      <div className='offer_img'>
      <img src="./images/offer.png" alt="offer" className='w-100'/>

      </div>
    </Col>


    <Col lg='6' md='6'>
      <div className='offer_content'>
        <h2>We offer the following Courses</h2>,
        <p>Guide to 11+ Exams, Alevels, Advanced Mathematics and Engineering <br /> 
          With easy-to grasp the terminilogies intended for beginners.</p>

      <div className='d-flex gap-5 align-items-center'>
          
        <div className='single-offers'>
            <p className='offer_title'>
              <img src="./images/gradient.png" alt="offer" /> Highly Intuituve Lessons
            </p>
          </div>
          <div className='single-offers'>
            <p className='offer_title'>
              <img src="./images/gradient.png" alt="offer" /> Build your Skills with confidence
            </p>
          </div>

          <div className='single-offers'>
            <p className='offer_title'>
              <img src="./images/gradient.png" alt="offer" /> Learning in a condusive envinroment
            </p>
          </div>

          <div className='single-offers'>
            <p className='offer_title'>
              <img src="./images/gradient.png" alt="offer" /> With experinced tutors.
            </p>
          </div>
      </div>   

      <a href="explore.com"> <button className='btn-offer'>Explore Courses</button></a> 

      </div>
    </Col>




        </Row>
      </Container>
    </section>
  )
}

export default offer