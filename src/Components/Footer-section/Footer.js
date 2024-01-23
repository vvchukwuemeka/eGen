import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'


const footerQuickLinks = [
  {
    display : 'Resources',
    url: '#'
  },
  {
    display : 'Blog',
    url: '#'
  },
  {
    display : 'Documents',
    url: '#'
  }

]


const footerComLinks = [
  {
    display : 'Support',
    url: '#'
  },
  {
    display : 'Help',
    url: '#'
  },
  
]


const footerInfoLinks = [
  {
    display : 'About Us',
    url: '#'
  },
  {
    display : 'Schools',
    url: '#'
  },
  {
    display : 'Contact us',
    url: '#'
  }

]

const footerCoursesLinks = [
  {
    display : '11 Plus',
    url: '#'
  },
  {
    display : 'A Levels',
    url: '#'
  },
  {
    display : 'GCSE',
    url: '#'
  },
  {
    display :'Advanced Mathematics',
    url: '#'
  },
  {
    display : 'Advanced Engineering',
    url: '#'
  }

]
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <h6 className='text-white pt-4'>Courses</h6>
            <ListGroup className='link_list'>
              {
                footerCoursesLinks.map((item, index) => (
                  <ListGroupItem key={index}
                  className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          

          </Col>

          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>Info</h6>
            <ListGroup className='link_list'>
              {
                footerInfoLinks.map((item, index) => (
                  <ListGroupItem key={index}
                  className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>

          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>Community</h6>
            <ListGroup className='link_list'>
              {
                footerComLinks.map((item, index) => (
                  <ListGroupItem key={index}
                  className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>

          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>Quicklink</h6>
            <ListGroup className='link_list'>
              {
                footerQuickLinks.map((item, index) => (
                  <ListGroupItem key={index}
                  className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>

          <Col>

          <div className='follows'>
            <p className='mb-0 d-flex
            align-items-center justify-content-center
            gap-2 text-white'>
              © eGen 2024. All rights reserved

            </p>

            <div className='d-flex align-items-center
            justify-content-center gap=2
            links_socials'>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className='ri-facebook-fill
                  text-white'></i>

                </a>
              </span>

              <span>
                {" "}
                <a href="Linkedin.com">
                  <i className='ri-linkedin-fill
                  text-white'></i>

                </a>
              </span>
              
              <span>
                {" "}
                <a href="youtube.com">
                  <i className='ri-youtube-fill
                  text-white'></i>

                </a>
              </span>
              
              <span>
                {" "}
                <a href="instagram.com">
                  <i className='ri-instagram-fill
                  text-white'></i>

                </a>
              </span>

          
                      
           
          
          


            </div>

          </div>
          </Col>
        </Row>
      </Container>


    </footer>
  )
}

export default Footer