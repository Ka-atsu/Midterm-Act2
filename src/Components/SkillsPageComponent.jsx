import React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import NavigationComponent from "./NavigationComponent";

const SkillsPageComponent = () => {
    return (
        <>
            <Container className="mt-5">
                <NavigationComponent/>
                <h1 className="display-4">My Skills</h1>
                <ListGroup className="mt-4">
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Laravel</ListGroup.Item>
                    <ListGroup.Item>PHP</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    );
}
export default SkillsPageComponent;