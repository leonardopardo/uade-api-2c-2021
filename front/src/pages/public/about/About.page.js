import React from 'react';
import { Container } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

export default function AboutPage() {
    return(
        <>
            <NavLayout />
            <Container className="pt-4">
                <h1>About Page</h1>
            </Container>
            <FooterLayout />
        </>
    )
}