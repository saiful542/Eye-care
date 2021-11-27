import React from 'react';
import { Form } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';

const Contact = () => {
    const service = useServices();
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="shadow w-100 p-2">Share your problem with us</h1>
            <Form className="w-50 shadow-lg mt-3 animate__animated animate__fadeIn " style={{ backgroundColor: "cornSilk" }}>
                <Form.Group className="mb-3 p-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 p-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <h5>mail us : eyecare@gmail.com</h5>
                <button className="btn mb-3 border-dark fw-bold" style={{ backgroundColor: "#eceb98" }} type="submit">
                    Submit
                </button>
            </Form>

        </div>
    );
};

export default Contact;