import React from 'react';

import { Container } from 'react-bootstrap';

import NavLayout from './../../../layout/site/Nav.layout';
import FooterLayout from '../../../layout/site/Footer.layout';
import CarrouselPartial from './partials/Carrouse';
import HomeContent from './partials/Content';

export default function HomePage () {
    return(
        <>
            <NavLayout />
            <Container className="p-0" fluid>
                <CarrouselPartial />
                <HomeContent />
            </Container>
            <FooterLayout />
        </>
    )
}