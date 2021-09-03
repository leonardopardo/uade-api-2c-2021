import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

export default function ContactPage() {
    return(
        <>
            <NavLayout />
                <Container className="pt-4">
                    <Row className="h-100">
                        <Col md={{ span: 4 }} className="bg-light p-4 ">
                            <h2> Contactenos</h2>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label> Nombre</Form.Label>
                                    <Form.Control type="text" size="lg" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> Apellido</Form.Label>
                                    <Form.Control type="text" size="lg" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> Email</Form.Label>
                                    <Form.Control type="text" size="lg" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={4} resize="none"/>
                                </Form.Group>

                                <div className="d-grid gap-2 mb-2">
                                    <Button variant="primary" type="submit" size="lg"> Enviar</Button>
                                </div>
                            </Form>
                        </Col>
                        <Col md={{ span: 8 }} className="bg-light p-4 ">
                            <div class="text-center">
                                <h1> Preguntas Frecuentes</h1>
                                    <h2> Pregunta Pregunta Pregunta </h2>
                                        <p> Respuesta Respuesta Respuesta Respuesta Respuesta</p>
                                    <h2> Pregunta Pregunta Pregunta </h2>
                                        <p> Respuesta Respuesta Respuesta Respuesta Respuesta</p>
                                    <h2> Pregunta Pregunta Pregunta </h2>
                                        <p> Respuesta Respuesta Respuesta Respuesta Respuesta</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <FooterLayout />
        </>
    )
}