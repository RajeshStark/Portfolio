import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Resume from './Resume/Resume'

export default function navbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {/* <Nav.Link active href="#home">Home</Nav.Link> */}
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        {/* <Nav.Link href="#resume">Resume</Nav.Link> */}
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="home">
                <Home/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="portfolio">
                <Portfolio/>
            </div>
            {/* <div id="resume">
                <Resume/>
            </div> */}
            <div id="contact">
                <Contact/>
            </div>
        </div>
    )
}
