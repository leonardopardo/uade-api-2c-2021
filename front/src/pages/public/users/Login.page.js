import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import FooterLayout from './../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

export default function LoginPage() {
    return(
        <>
            <NavLayout />
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="mb-4">
                        <h3 className="text-center">Ingresar</h3>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="bg-light p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />
                                <Form.Text className="text-muted">
                                Núnca compartiremos tu email con nadie.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recordarme" />
                            </Form.Group>
                            
                            <p>
                                ¿No recordás tu contraseña? <br />
                                <Link to="/restore-password">Recuperar Ahora</Link>
                            </p>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    Ingresar
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