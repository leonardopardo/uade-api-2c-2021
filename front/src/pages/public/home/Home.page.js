import React from 'react';
import { Container } from 'react-bootstrap';
import NavLayout from './../../../layout/site/Nav.layout';
import FooterLayout from '../../../layout/site/Footer.layout';

export default function HomePage () {
    return(
        <>
            <NavLayout />
            <Container>
                <h1>Home Page</h1>
            </Container>
            <FooterLayout />
        </>
    )
}