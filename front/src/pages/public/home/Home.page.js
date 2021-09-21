import React from 'react';

import { Container } from 'react-bootstrap';

import NavLayout from './../../../layout/site/Nav.layout';
import FooterLayout from './../../../layout/site/Footer.layout';

import CarrouselPartial from './partials/Carrouse';
import Features from './partials/Features';
import Content from './partials/Content';

const HomePage = () => {
    return(
        <>
            <NavLayout />
            <Container className="p-0" fluid>
                <CarrouselPartial />
                <Features />
                <Content />
            </Container>
            <FooterLayout />
        </>
    )
}

export default HomePage