import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

export default function RestorePasswordPage(){
    return (
        <>
            <NavLayout />
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="mb-4">
                        <h3 className="text-center">Recuperar Contraseña</h3>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="bg-light p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />
                                <Form.Text className="text-muted">
                                Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    Enviar
                                </Button>
                            </div>
                            
                            <small className="">
                                Todavía no tengo una cuenta. <Link to="/register">Crear una cuenta</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </>
    )
}
