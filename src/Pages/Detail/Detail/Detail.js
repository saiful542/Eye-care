import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
const Detail = () => {
    const { Id } = useParams();
    const services = useServices();
    const service = services.filter(service => service.id === Id)
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Card className="shadow-lg my-5 w-50 bg-primary bg-opacity-25 animate__animated animate__fadeIn" >
                    <Card.Body>
                        <Card.Title>{service[0]?.title}</Card.Title>
                        <hr />
                        <small>{service[0]?.description}</small>
                        <br />
                        <br />
                        <Card.Text>
                            specialist : {service[0]?.doctor}
                        </Card.Text>
                        <h6>price: {service[0]?.price}</h6>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Detail;