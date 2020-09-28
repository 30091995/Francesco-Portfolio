import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div>
            <Navbar expand="lg" className="box" style={{backgroundColor: "#F8F7F7"}}>
                <Navbar.Brand className="link-color"><Link to={"/"}>Francesco Saccone</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to={"/about"}>About</Nav.Link>
                    <Nav.Link to={"/projects"}>Projects</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavigationBar