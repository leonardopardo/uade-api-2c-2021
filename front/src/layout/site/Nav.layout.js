import React from 'react';
import { useLocation } from 'react-router';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiHome, FiMessageCircle, FiUserPlus, FiLogIn } from 'react-icons/fi';

export default function NavLayout(props) {

    const pathName = useLocation().pathname

    const setActivePage = (value) => {
        return pathName === value
    }

    return(
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" className="">
                    <Container>
                    <Navbar.Brand href="/" className="text-uppercase">padres al día</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link active={setActivePage("/")} href="/"><FiHome /> Home</Nav.Link>
                            <Nav.Link active={setActivePage("/contact")} href="/contact"><FiMessageCircle /> Contacto</Nav.Link>
                            <Nav.Link active={setActivePage("/register")} href="/register"><FiUserPlus /> Registro</Nav.Link>
                            <Nav.Link active={setActivePage("/login")} href="/login"><FiLogIn /> Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
