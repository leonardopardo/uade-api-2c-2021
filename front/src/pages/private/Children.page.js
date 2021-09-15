import React from 'react'

import { Col, Container, Row, Card, Nav, Form, Button, CardGroup} from 'react-bootstrap'
import { FiBell, FiPrinter, FiSend, FiShare2 } from 'react-icons/fi'

import SideBar from './../../layout/app/SideBar.layout'
import FooterLayout from './../../layout/site/Footer.layout';


const Children = () => {
    
    return(
        <>
            <SideBar />
            <Container className="bg-light vh-100">
                <Row className="h-100 align-items-center">
                    <Col md={2}> Col 1 of 2</Col>
                    <Col>
                        <Row>
                            <Col md={3}>
                                <Card border="primary" className="text-center">
                                    <Card.Img variant="top" width="180" height="240" src="https://thispersondoesnotexist.com/image" />
                                    <Card.Body>
                                        <Card.Title>Anita Pérez</Card.Title>
                                        <Card.Text>6 meses</Card.Text>
                                    </Card.Body>

                                    <hr />

                                    <Card.Text>Ultimos Eventos</Card.Text>
                                    <Nav className="justify-content-center flex-column mb-auto">
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Card.Footer>
                                        <FiSend /> <FiShare2 /> <FiBell /> <FiPrinter />
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card border="primary" className="text-center">
                                    <Card.Img variant="top" width="180" height="240" src="https://thispersondoesnotexist.com/image" />
                                    <Card.Body>
                                        <Card.Title>Anita Pérez</Card.Title>
                                        <Card.Text>6 meses</Card.Text>
                                    </Card.Body>

                                    <hr />

                                    <Card.Text>Ultimos Eventos</Card.Text>
                                    <Nav className="justify-content-center flex-column mb-auto">
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Card.Footer>
                                        <FiSend /> <FiShare2 /> <FiBell /> <FiPrinter />
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card border="primary" className="text-center">
                                    <Card.Img variant="top" width="180" height="240" src="https://thispersondoesnotexist.com/image" />
                                    <Card.Body>
                                        <Card.Title>Anita Pérez</Card.Title>
                                        <Card.Text>6 meses</Card.Text>
                                    </Card.Body>

                                    <hr />

                                    <Card.Text>Ultimos Eventos</Card.Text>
                                    <Nav className="justify-content-center flex-column mb-auto">
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Card.Footer>
                                        <FiSend /> <FiShare2 /> <FiBell /> <FiPrinter />
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card border="primary" className="text-center">
                                    <Card.Img variant="top" width="180" height="240" src="https://thispersondoesnotexist.com/image" />
                                    <Card.Body>
                                        <Card.Title>Anita Pérez</Card.Title>
                                        <Card.Text>6 meses</Card.Text>
                                    </Card.Body>

                                    <hr />

                                    <Card.Text>Ultimos Eventos</Card.Text>
                                    <Nav className="justify-content-center flex-column mb-auto">
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link style={{color:"black"}} variant="dark" href="" className="">Evento</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Card.Footer>
                                        <FiSend /> <FiShare2 /> <FiBell /> <FiPrinter />
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <FooterLayout fixed />
        </>
    )
}

export default Children