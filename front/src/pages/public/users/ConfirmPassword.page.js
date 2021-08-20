import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';
import { FiCheck, FiMail, FiLogIn, FiLock, FiRefreshCw, FiAlertOctagon } from 'react-icons/fi';

export default function ConfirmPasswordPage() {
    return(
        <>
            <NavLayout />
            <Container>
                <Row>
                    <Col md={{ span: 8 }} className="m-auto mb-4 text-center">
                        <h3 className="text-center">
                            <FiCheck /> Ingresá tus nuevas credenciales
                        </h3>
                        <p>
                            <FiAlertOctagon /> Serás redirigido de forma automática al login.
                        </p>
                    </Col>
                    <Col md={{ span: 6 }} className="m-auto bg-light p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FiMail /> Email</Form.Label>
                                <Form.Control type="email" placeholder="nombre@mail.com" disabled />
                                <Form.Text className="text-muted">
                                Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FiLock /> Nueva Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    <FiRefreshCw /> Resetear Contraseña
                                </Button>
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. <Link to="/login"><FiLogIn /> Ir al login</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </>
    )
}