import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationComponent from "./NavigationComponent";

const HomePageComponent = () => {
    return (
        <>
            <Container className="mt-5">
                <NavigationComponent/>
                <Row className="justify-content-center text-center my-5">
                    <Col md={8}>
                        <h1 className="display-4">Welcome to My Profile!</h1>
                        <p className="lead mt-4">
                            My career goal is to become a skilled and innovative software developer, specializing in creating efficient, user-friendly applications 
                            that address real-world challenges.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default HomePageComponent;
