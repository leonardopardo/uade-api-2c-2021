import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import { FiHome, FiLogOut, FiUser, FiCalendar, FiSmile } from 'react-icons/fi'

import './../../assets/site/css/sidebars.css'

const SideBar= () => {

    const pathName = useLocation().pathname

    const setActivePage = (value) => {
        return pathName === value
    }
   
    return (
        <>
            <nav className="d-flex flex-column flex-shrink-0 p-3 bg-light fixed-bottom h-100" style={{ width: '280px' }}>
                
                <Link to="/" variant="dark" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    Padres al Día
                </Link>
                
                <hr />

                <Nav variant="pills" className="flex-column mb-auto">
                    <Nav.Item>
                        <Nav.Link variant="dark" active={setActivePage("/app")} href="/app" className=""><FiHome /> Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link variant="dark" active={setActivePage("/app/children")} href="/app/children" className=""><FiSmile /> Niñ@</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link variant="dark" active={setActivePage("/app/calendar")} href="/app/calendar" className=""><FiCalendar /> Calendario</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link variant="dark" active={setActivePage("/app/profile")} href="/app/profile" className=""><FiUser /> Perfil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link variant="dark" active={setActivePage("/app/logout")} href="/app/logout" className=""><FiLogOut /> Salir</Nav.Link>
                    </Nav.Item>
                </Nav>
            </nav>
        </>
    )
}

export default SideBar