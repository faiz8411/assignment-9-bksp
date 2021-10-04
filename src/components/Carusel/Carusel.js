import React from 'react';
import './Carusel.css'
import { Carousel } from 'react-bootstrap';
import carusel from '../../images/Service/carusel.jpg'
import carusel2 from '../../images/Service/cricket.jpg'
import carusel3 from '../../images/Service/hockey.jpg'

const Carusel = () => {
    return (
        <Carousel className="carusel-container mt-5">
            <Carousel.Item>
                <img
                    className="carusel d-center  "
                    src={carusel}
                    alt="First slide"
                />
                <Carousel.Caption className="carusel-text">
                    <h2>starting admission in Novembar</h2>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carusel d-center "
                    src={carusel2}
                    alt="Second slide"
                />

                <Carousel.Caption className="carusel-text">
                    <h2>practissing cricket</h2>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carusel  d-center "
                    src={carusel3}
                    alt="Third slide"
                />

                <Carousel.Caption className="carusel-text">
                    <h3>practissing hockey</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carusel;