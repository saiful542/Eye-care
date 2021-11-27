import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useServices from '../../Hooks/useServices';
import Services from '../Services/Services';

const Home = () => {
    const services = useServices();
    const history = useHistory();

    const AllServices = () => {
        history.push('/More')
    }
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./images/baby.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-black">
                            <h1>Eye is everything!!</h1>
                            <p>Most of the eye is filled with a clear gel called the vitreous. Light projects through your pupil and lens to the back of the eye. The inside lining of the eye is covered by special light-sensing cells that are collectively called the retina. It converts light into electrical impulses.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/optimize.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/eyeh.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Row xs={1} md={2} lg={4} className="p-1 g-4 m-5 d-flex align-items-center justify-content-center">
                {
                    services.slice(0, 6).map(service => <Services
                        key={service.id}
                        service={service}>

                    </Services>)
                }
                <button onClick={AllServices} className="ms-5 btn mb-3 bg-primary bg-opacity-50 fw-bolder">All services --> </button>

            </Row>

        </div>
    );
};

export default Home;