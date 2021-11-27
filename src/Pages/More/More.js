import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Services from '../Services/Services';

const More = () => {
    const services = useServices();
    return (
        <div>
            <Row xs={1} md={2} lg={4} className="p-1 g-4 m-5">
                {
                    services.map(service => <Services key={services.id} service={service}>

                    </Services>)
                }

            </Row>
        </div>
    );
};

export default More;