import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <>
            <ListGroup horizontal className="mb-2">
                    <ListGroup.Item><Link to="/" style={{ textDecoration: 'none' , color:"inherit"}}>Home</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/about" style={{ textDecoration: 'none' , color:"inherit"}}>About</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/skills" style={{ textDecoration: 'none' , color:"inherit"}}>Skills</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/contact" style={{ textDecoration: 'none' , color:"inherit"}}>Contact</Link></ListGroup.Item>
            </ListGroup>
        </>
    );
}
export default NavigationComponent;