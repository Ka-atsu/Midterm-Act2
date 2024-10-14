import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationComponent from "./NavigationComponent";

const AboutPageComponent = () => {
    return (
        <>
            <Container className="mt-5">
                <NavigationComponent/>
                    <Row className="justify-content-center text-center my-5">
                        <Col md={8}>
                                <h1 className="display-4">About Me</h1>
                                <p className="lead mt-4">
                                Hi! I'm Kent, an intermediate full-stack developer with a passion for learning and building web applications. 
                                I am currently exploring different technologies and improving my skills in both front-end and back-end development, with a strong focus on React and Laravel. 
                                </p>
                                <p className="lead mt-4">
                                Outside of coding, I enjoy playing online chess, which helps me stay creative and inspired.
                                </p>
                        </Col>
                    </Row>
            </Container>
        </>
    );
}
export default AboutPageComponent;