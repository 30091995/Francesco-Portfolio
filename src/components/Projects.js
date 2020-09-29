import React from 'react'
import "./Projects.css"
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { Container, Row, Col } from "reactstrap";


function Projects() {
    return (
        <div className="background-color">
            <NavigationBar />
            <Container fluid className="startFullHeight">
                <Row className="small-height align-items-center justify-content-center text-center fadeIn ">
                    <Col lg="6">
                    <p className="container-text text-monospace">Record box is a digitized vinyl library to organize all the records in your collection</p>
                    <a href="https://record-box.herokuapp.com/"className="link-color">Click here to check it out!</a>
                    </Col>
                    <Col lg="6"className="text-center">
                    <h2 className="header2 link-color">Record box</h2>
                    </Col>
                </Row>

                <Row className="small-height align-items-center justify-content-center text-center border-up fadeIn4 ">
                    <Col lg="6">
                    <h2 className="header2 link-color">The cat app</h2>
                    </Col>
                    <Col lg="6">
                    <p className="container-text text-monospace">You want a cat but you don't know where to start from? The cat app is perfect for you!</p>
                    <a  href="https://the-cat-app.herokuapp.com/"className="link-color">Click here to check it out!</a>
                    </Col>
                </Row>

                <Row className="small-height align-items-center justify-content-center text-center border-up fadeIn5 ">
                    <Col lg="6">
                    <p className="container-text text-monospace">Run, run, Run and jump between obstacles. If you touch the lava, you're dead!</p>
                    <a href="https://happy-galileo-040424.netlify.app/"className="link-color">Click here to check it out!</a>
                    </Col>
                    <Col lg="6">
                    <h2 className="header2 link-color">The floor is lava</h2>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )

}

export default Projects