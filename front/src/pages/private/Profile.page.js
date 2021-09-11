import React from 'react'

import { Container } from 'react-bootstrap'

import SideBar from './../../layout/app/SideBar.layout'


const Profile = () => {

    console.log('cargó el componente de profile')
    
    return(
        <>
            <SideBar />
            <Container className="bg-light">
                <h1>Profile</h1>
            </Container>
        </>
    )
}

export default Profile