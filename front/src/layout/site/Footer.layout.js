import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function FooterLayout() {
    return(
        <>
            <footer className="footer bg-light fixed-bottom p-3">
                <Container>
                    <Row>
                        <Col>
                            <small>&copy; 2021, Manuel Anderson - Leonardo Pardo</small>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <small className="text-muted">
                                UADE - Aplicaciones Interactivas 2021
                            </small>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}