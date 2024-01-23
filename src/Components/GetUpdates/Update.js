import React from 'react'
import './Update.css'
import { Container, Row, Col } from 'reactstrap'

const Update = () => {
  return (
    <section className='update_section'>
      <Container className='update pt-5'>
        <Row>
          <Col lg='6' md='6' className='text-left'>
            <div className='update_content'>
              <div className='text-white pb-4'>
              <h2 className='update_title'>Get Updates</h2>

              <p className='update_p text-white'>
                Join our newsletter for the latest updates
              </p>
            </div>

            <div className='getupdate'>
              <input type='text' placeholder='mekus36@yahoo.co.uk' />
              <button className='btn btn-update'>SUBSCRIBE</button>
             </div>
            </div>

          </Col>

          <Col lg='6' md='6'>
            <div className='update_img'>
            <img src="./images/update img.avif" alt="update" className='w-100'/>


            </div>

          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Update