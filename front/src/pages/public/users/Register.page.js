import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiLogIn, FiCheck, FiLock, FiMail } from "react-icons/fi"; 
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';


export default function RegisterPage() {
    return (
        <>
            <NavLayout />
            <Container>
                <Row>
                    <Col md={{ span: 6 }} class="">
                        <h2>
                            El registro del crecimiento de tus hijos <br /> 
                            al alcance de tu mano.
                        </h2>
                        <h6 style={{ lineHeight: '2rem' }}>
                            <strong>PADRES AL DÍA</strong> es una aplicación que te permitirá tener
                            registrada, actualizada y siempre disponible la información sobre el crecimiento
                            de tus hijos.
                            Con nuestra herramienta podrás: 
                            <ul>
                                <li>Consultá el calendario de Vacunas y registrá la fecha de aplicación</li>
                                <li>Controlá los percentiles de la talla y el peso</li>
                                <li>Registrar los eventos importantes en la vida de tus hijos.</li>
                            </ul>
                        </h6>
                    </Col>
                    <Col md={{ span: 4, offset: 2 }} className="bg-light p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FiMail /> Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />
                                <Form.Text className="text-muted">
                                Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FiLock /> Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    Registrarme
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