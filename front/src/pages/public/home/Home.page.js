import React from 'react';

import { Container } from 'react-bootstrap';

import NavLayout from './../../../layout/site/Nav.layout';
import CarrouselPartial from './partials/Carrouse';
import Features from './partials/Features';
// import FooterLayout from '../../../layout/site/Footer.layout';
import FooterFullLayout from './../../../layout/site/Footer.full.layout';

const HomePage = () => {
    return(
        <>
            <NavLayout />
            <Container className="p-0" fluid>
                <CarrouselPartial />
                <Features />
            </Container>
            <FooterFullLayout />
        </>
    )
}

export default HomePage