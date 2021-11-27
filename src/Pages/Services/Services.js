import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Detail from '../Detail/Detail/Detail';


const Services = (props) => {
    let { price, description, picture, title, id, doctor } = props.service || {};

    return (

        <Col className="animate__animated animate__backInDown">
            <Card className="shadow-lg" >
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <hr />
                    <small>{description}</small>
                    <br />
                    <br />
                    <Card.Text>
                        specialist : {doctor}
                    </Card.Text>
                    <h6>Cost: {price}</h6>
                    <NavLink to={`/Detail/${id}`}><Button className="btn border-dark w-50 bg-primary bg-opacity-50" >Know more</Button></NavLink>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Services;