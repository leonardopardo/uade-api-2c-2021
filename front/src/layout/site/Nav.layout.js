import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiLogIn, FiHome, FiInfo, FiMessageCircle } from 'react-icons/fi';

export default function NavLayout() {
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">Padres al Día</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/"><FiHome /> Home</Nav.Link>
                        <Nav.Link href="/about"><FiInfo /> Nosotros</Nav.Link>
                        <Nav.Link href="/contact"><FiMessageCircle /> Contact</Nav.Link>
                        <Nav.Link href="/login"><FiLogIn /> Ingresar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}