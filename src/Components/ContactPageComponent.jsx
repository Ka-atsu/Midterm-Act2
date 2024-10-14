import React , { useState } from "react";

import Container from 'react-bootstrap/Container';
import NavigationComponent from "./NavigationComponent";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SubmissionSuccessComponent from "./SubmissionSuccessComponent";

const ContactPageComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <SubmissionSuccessComponent name={name} email={email} message={message} />;
    }

    return (
        <>
            <Container className="mt-5">
                <NavigationComponent/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="my-3">
                        <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Control as="textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    );
}
export default ContactPageComponent;