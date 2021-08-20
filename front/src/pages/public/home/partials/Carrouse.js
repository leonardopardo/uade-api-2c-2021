import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarrouselPartial() {
    return(
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dummyimage.com/1920x600/d1d1d1/000000.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dummyimage.com/1920x600/454545/ffffff.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}