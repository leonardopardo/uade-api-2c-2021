import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';
import { FiCheck, FiMail, FiLogIn, FiSend } from 'react-icons/fi';

export default function RestorePasswordPage(){
    return (
        <>
            <NavLayout />
            <Container>
                <Row>
                    <Col md={{ span: 8 }} className="m-auto mb-4 text-center">
                        <h3 className="text-center">
                            <FiCheck /> Ingresá el email con el que te registraste
                        </h3>
                        <p>
                            Revisá tu correo y seguí los pasos para recuperar tu contraseña
                        </p>
                    </Col>
                    <Col md={{ span: 6}} className="m-auto bg-light p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FiMail /> Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />
                                <Form.Text className="text-muted">
                                Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    <FiSend /> Enviar Link
                                </Button>
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. 
                                <Link to="/login"><FiLogIn /> Ir a Login</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </>
    )
}
