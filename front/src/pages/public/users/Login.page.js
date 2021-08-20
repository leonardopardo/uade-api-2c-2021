import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { FiUserCheck, FiUnlock, FiUserPlus, FiLogIn } from "react-icons/fi";
import FooterLayout from './../../../layout/site/Footer.layout';
import NavLayout  from './../../../layout/site/Nav.layout';

export default function LoginPage() {
    return(
        <>
            <NavLayout />
                <Container className="mb-4 pt-4 h-100">
                    <Row className="h-100">
                        <Col md={{ span: 4 }} className="m-auto bg-light p-4 ">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><FiUserCheck /> Email</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu email" size="lg" />
                                    <Form.Text className="text-muted">
                                    Núnca compartiremos tu email con nadie.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><FiUnlock /> Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Password" size="lg" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Recordarme" />
                                </Form.Group>
                                
                                <small className="d-block mb-3">
                                    ¿No recordás tu contraseña? <Link to="/restore-password">Recuperar Ahora</Link>
                                </small>

                                <div className="d-grid gap-2 mb-2">
                                    <Button variant="primary" type="submit" size="lg">
                                        <FiLogIn /> Ingresar
                                    </Button>
                                </div>
                                
                                <small>
                                    Todavía no tengo una cuenta. <br/>
                                    <Link to="/register"><FiUserPlus /> Crear una cuenta</Link>
                                </small>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            <FooterLayout />
        </>
    )
}