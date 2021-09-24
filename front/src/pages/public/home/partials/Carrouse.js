import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../../assets/site/img/slide-01.jpg'
import slide2 from '../../../../assets/site/img/slide-02.jpg'

const CarrouselPartial = () => {
    
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption className="bg-dark-25">
                <h3>Informate sobre el cuidado de tus hijos</h3>
                <p>Información sobre controles pediátricos y temas relevantes para padres primerizos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption className="bg-light-25">
                <h3>Seguimiento de los Controles Pediátricos</h3>
                <p>Registrate en nuestro sitio y accedé a nuestra herramientas para registrar los controles</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarrouselPartial