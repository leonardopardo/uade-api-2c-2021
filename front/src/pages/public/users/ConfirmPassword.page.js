import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

export default function ConfirmPasswordPage() {
    return(
        <>
            <NavLayout />
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="mb-4">
                        <h3 className="text-center">Confirmar Contraseña</h3>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="bg-light p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="nombre@mail.com" disabled />
                                <Form.Text className="text-muted">
                                Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nueva Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    Guardar
                                </Button>
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. <Link to="/login">Ir al login</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </>
    )
}