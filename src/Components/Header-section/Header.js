import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import "./Header.css";


const navLinks = [
{
    display: 'Home',
    url: '#',
},

{
    display: 'Courses',
    url: '#',
},

{
    display: 'About Us',
    url: '#',
},

{
    display: 'Contact Us',
    url: '#',
},

]


const Header = () => {

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle
    ('active_menu')
  return (
    <header className="header">
        <Container>
            <div className="navigation d-flex align-items-center
            justify-content-between">
                <div className='logo'>
                    <h2 className='d-flex align-items-center justify-content-between'>
                    <img src="./images/nav logo.jpg" alt="eGen" className='navImg'/> eGen 
                    </h2>
                </div>

                <div className='nav d-flex algign-items-center gap-5'>
                    <div className='nav_menu' ref={menuRef} onClick={menuToggle}>
                        <ul className='nav_list'>
                            {
                                navLinks.map((items, index) => (
                                    <li key={index} className='nav_item' >
                                        <a href={items.url}>
                                         {items.display}</a>
                                    </li>
                                ))
                            }

                        </ul>

                    </div>

                    <div className='nav_right'>
                        <p className='mb-0 d-flex align-items-center gap-2'></p>
                        <button className='btn-login'>LOGIN</button>

                    </div>
                    </div>

                    <div className='mobile_menu'>
                        <span><i className='ri-menu-line' onClick={menuToggle}></i></span>

                    </div>
            </div>
        </Container>
        </header>
  )
}

export default Header