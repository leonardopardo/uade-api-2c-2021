import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return(
        <>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="bg-light p-3 mt-3">
                    <h3>Ingresar a mi Agenda</h3>
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
                            ¿No recuerda su contraseña? <Link to="/">Recuperar Contraseña</Link>
                        </p>

                        <div className="d-grid gap-2 mb-2">
                            <Button variant="primary" type="submit" size="lg">
                                Ingresar
                            </Button>
                        </div>
                        
                        <small className="">
                            Todavía no tengo una cuenta. <Link to="/">Crear una cuenta</Link>
                        </small>
                    </Form>
                </Col>
            </Row>
        </>
    )
}