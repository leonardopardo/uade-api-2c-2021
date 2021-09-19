import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiLogIn, FiHome, FiInfo, FiMessageCircle } from 'react-icons/fi';
import { useLocation } from 'react-router';

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
                    <Navbar.Brand href="/">Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link active={setActivePage("/")} href="/"><FiHome /> Home</Nav.Link>
                            <Nav.Link active={setActivePage("/about")} href="/about"><FiInfo /> Nosotros</Nav.Link>
                            <Nav.Link active={setActivePage("/contact")} href="/contact"><FiMessageCircle /> Contact</Nav.Link>
                            <Nav.Link active={setActivePage("/login")} href="/login"><FiLogIn /> Ingresar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
