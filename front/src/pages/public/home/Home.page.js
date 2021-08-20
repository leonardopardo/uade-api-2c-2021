import React from 'react';
import { Container } from 'react-bootstrap';
import NavLayout from './../../../layout/site/Nav.layout';
import FooterLayout from '../../../layout/site/Footer.layout';
import CarrouselPartial from './partials/Carrouse';

export default function HomePage () {
    return(
        <>
            <NavLayout />
            <Container>
                <CarrouselPartial />
            </Container>
            <FooterLayout />
        </>
    )
}