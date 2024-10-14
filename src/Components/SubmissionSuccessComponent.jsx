import React from "react";
import Container from 'react-bootstrap/Container';
import NavigationComponent from "./NavigationComponent";

const SubmissionSuccessComponent = ({ name, email, message }) => {
    return (
        <>
           <Container className="mt-5">
                <NavigationComponent />
                <div className="text-center">
                    <h1 className="display-4">Thank you, {name}!</h1>
                    <p className="lead">Your message has been sent successfully.</p>
                    <hr className="my-4" />
                    <h2>Submission Details:</h2>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Message:</strong> {message}</p>
                </div>
            </Container>
        </>
    );
}
export default SubmissionSuccessComponent;