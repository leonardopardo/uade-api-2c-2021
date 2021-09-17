import React from 'react'

import { Col, Container, Row, Card, Nav, Form, Button} from 'react-bootstrap'
import { FiBell, FiPrinter, FiSend, FiShare2 } from 'react-icons/fi'

import SideBar from './../../layout/app/SideBar.layout'
import FooterLayout from './../../layout/site/Footer.layout';


const Profile = () => {
    
    return(
        <>
            <SideBar />
            <Container className="bg-light vh-100">
                <Row className="h-100 align-items-center">
                    <Col md={2}> Col 1 of 2</Col>
                    <Col md={3}>
                        <Card border="primary" className="text-center">
                            <Card.Img variant="top" width="180" height="280" src="https://thispersondoesnotexist.com/image" />
                            
                            <Card.Body>
                                <Card.Title>Ariel Pérez</Card.Title>
                                <Card.Text>35 años</Card.Text>
                            </Card.Body>

                            <hr/>

                            <Card.Text>2 Hijos</Card.Text>
                            <Nav className="justify-content-center flex-column mb-auto">
                                <Nav.Item>
                                    <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Anita Pérez (6 meses)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Ismael Pérez (2 años)</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <hr/>

                            <Card.Text>juan@perez.com</Card.Text>

                            <Card.Footer>
                                <FiSend /> <FiShare2 /> <FiBell /> <FiPrinter />
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Form>
                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label> Nombre</Form.Label>
                                    <Form.Control type="text" size="sm" placeholder="Nombre"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label> Apellido</Form.Label>
                                    <Form.Control type="text" size="sm" placeholder="Apellido"/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label> Email</Form.Label>
                                <Form.Control type="text" size="sm" placeholder="Email"/>
                            </Form.Group>

                            <Row>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label> Contraseña</Form.Label>
                                    <Form.Control type="text" size="sm" placeholder="*****************"/>
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3">
                                    <Form.Label> Confirmar contraseña</Form.Label>
                                    <Form.Control type="text" size="sm" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label> Mensaje De Form</Form.Label>
                                <Form.Control type="text" placeholder="Aca va un buen mensaje"/>
                            </Form.Group>

                            <Button variant="primary" type="submit" size="sm"> Actualizar</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout fixed />
        </>
    )
}

export default Profile