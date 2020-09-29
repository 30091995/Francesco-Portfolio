import React from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col } from "reactstrap";
import './About.css'
import Footer from './Footer'


function About (){
    return(
        <div className="fadeIn">
            <NavigationBar />
            <Container fluid className="startFullHeight background-color">
                <Row className="h-100">
                    <Col lg={8} className="justify-content-center">
                    <h2 className="text-info header-title">
                        Hello! 
                    </h2>
                    <div>
                    <p className="paragraph-style text-monospace">I'm Francesco, I live in Berlin and I'm passionate about coding and videogames. Scroll down to check
                        the technologies that I regulary use or checkout my projects.
                    </p>
                    </div>
                    </Col>
                </Row>
            </Container>
            <div className="flex background-color big-logo-container">
                <div className="small-logo-container"><img src="./logosjhc.png" width="250px" alt="not found"/></div>
                <div className="small-logo-container"><img src="./react-logo.png" width="150px" alt="not found"/></div>
                <div className="small-logo-container"><img src="./nodelogo.png" width="150px" alt="not found"/></div>
                <div className="small-logo-container"><img src="./reduxlogo.png" width="100px" alt="not found"/></div>
                <div className="small-logo-container"><img src="./javascriptlogo.png" width="100px" alt="not found" style={{marginLeft:"10px", marginRight: "10px"}} /></div>
                <div className="small-logo-container"><img src="./mongodblogo.png" width="100"  alt="not found"/></div>
            </div>
            <div>
            <Footer />
            </div>   
            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

        </div>
    )
}

export default About