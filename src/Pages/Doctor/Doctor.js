import React from 'react';
import useServices from '../../Hooks/useServices';

const Doctor = () => {
    const services = useServices()
    return (
        <div className="d-flex   align-items-center justify-content-center">
            <div className="p-3 mt-3 d-md-flex  pb-5  justify-content-between">
                <div className="">
                    <img className="rounded-3 img-fluid" src="./images/doctors.jpg" alt="" />
                </div>
                <div className="m-3 d-flex flex-column justify-content-center ">
                    {
                        services.map(service => <div className="container  shadow-lg p-4 m-2 animate__animated animate__rollIn" style={{ borderRadius: "2rem" }}>
                            <h3>{service.doctor}</h3>
                            <h6>sector : <span className="text-warning">{service.title}</span></h6>
                            <p>mail : {service.email}</p>
                            <button className="btn bg-primary bg-opacity-50">Appointment</button>
                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Doctor;