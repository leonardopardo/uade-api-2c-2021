import React from 'react';

import { Container, Row } from 'react-bootstrap'

import NavLayout from './../../../layout/site/Nav.layout'
import FooterLayout from '../../../layout/site/Footer.layout'

const AboutPage = () => {
    return(
        <>
            <NavLayout />
            <main>
                <section className="section-header">
                    <Container className="pt-4">
                        <Row className="justify-content-center">
                            <h1 className="display-2"> AboutPage </h1>
                        </Row>
                    </Container>
                </section>
            </main>
            <FooterLayout />
        </>
    )
}

export default AboutPage