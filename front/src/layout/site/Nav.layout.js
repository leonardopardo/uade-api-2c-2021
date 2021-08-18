import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavLayout() {
    return(
        <Navbar bg="light" className="mb-3">
            <Container>
                <Navbar.Brand href="/">Padres al Día</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}