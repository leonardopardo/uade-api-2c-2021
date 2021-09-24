import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

const FooterLayout = () => {
    return (
        <>
            <footer className="footer">
                <Container className="border-top border-light py-4">
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

export default FooterLayout