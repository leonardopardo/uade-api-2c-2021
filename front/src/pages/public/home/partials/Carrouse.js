import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarrouselPartial() {
    return(
        <Carousel className="w-100 mb-4">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://dummyimage.com/2600x600/e8e8e8/616161"
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}