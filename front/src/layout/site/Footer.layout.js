import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const FooterLayout = ({fixed}) => {

    const footerClasses = () => {       
         return `footer bg-dark text-light pt-3 pb-3 ${!undefined === fixed ? "fixed-bottom" : ""}`
    }

    return(
        <>
            <footer className={ footerClasses() }>
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

export default FooterLayout