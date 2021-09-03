import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../../assets/img/slide-01.jpg'
import slide2 from '../../../../assets/img/slide-02.jpg'

export default function CarrouselPartial() {
    
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}