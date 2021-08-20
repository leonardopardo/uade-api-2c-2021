import React from 'react';
import { Container } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

export default function ContactPage() {
    return(
        <>
            <NavLayout />
            <Container className="pt-4">
                <h1>Contact Page</h1>
            </Container>
            <FooterLayout />
        </>
    )
}