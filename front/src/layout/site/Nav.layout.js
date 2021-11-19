import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from 'react-router';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiHome, FiMessageCircle, FiUserPlus, FiLogIn, FiLogOut, FiUser } from 'react-icons/fi';
import UserService from '../../services/UserService';

export default function NavLayout(props) {

    const history = useHistory()

    const[user, setUser] = useState(null)

    const getUser = async () => {
        let user = await UserService.findUser()
        setUser(user)
    }

    const logout = () => {
        UserService.logout()
        setUser(null)
        history.push("/")
    }

    const pathName = useLocation().pathname

    const setActivePage = (value) => {
        return pathName === value
    }

    useEffect(() => {
        getUser()
    }, [])

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
                            {
                                user === null ?
                                <Nav.Link active={setActivePage("/register")} href="/register"><FiUserPlus /> Registro</Nav.Link>
                                :
                                <Nav.Link onClick={logout}><FiUser />{user.email}</Nav.Link>
                            }
                            {
                                user === null ?
                                <Nav.Link active={setActivePage("/login")} href="/login"><FiLogIn /> Login</Nav.Link>
                                :
                                <Nav.Link onClick={logout}><FiLogOut />Salir</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
