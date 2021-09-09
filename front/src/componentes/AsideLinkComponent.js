import React from 'react';
import { Nav } from 'react-bootstrap';

const AsideLinkComponent = ({title, route}) => {

    const pathName = useLocation().pathname

    const setActivePage = (value) => {
        return pathName === value
    }

    return(
        <>
            <Nav.Link className={setActivePage(route)} href={route}>
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span className="nav-link-text ms-1">{title}</span>
            </Nav.Link>
        </>
    )
}

export default AsideLinkComponent
