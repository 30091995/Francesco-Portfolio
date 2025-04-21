import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Container fluid className="startFull">
        <Row className="h-100 align-items-center justify-content-center">
          <Col xs="10" md="auto" className="fadeIn text-center">
            <Col className="display-4 text-info">Francesco Saccone</Col>
            <Col className="h5 text-dark text-monospace my-4">
              Click the link to check my portfolio
            </Col>
            <Row className="my-4 justify-content-center">
              <Col xs="auto">
                <Link className="text-info" to="/about">
                  To my portfolio!
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
