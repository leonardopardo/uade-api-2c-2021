import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Tabs, Tab, Card, Form, Button } from 'react-bootstrap'
import { FcAbout } from 'react-icons/fc'
import { FiLogOut } from 'react-icons/fi'

import FooterLayout from './../app/Footer.layout'
import Profile from './../../pages/private/profile/Profile.page'
import Childrens from '../../pages/private/childrens/Childrens.page'
import Calendar from './../../pages/private/calendar/Calendar.page'
import Controls from '../../pages/private/controles/Controles.page'
import Percentiles from '../../pages/private/percentiles/percentiles.page'
import UserService from '../../services/UserService'

const AppLayout = () => {
    
    const history = useHistory()

    const { handleSubmit } = useForm()

    const logout = () => {
        UserService.logout();
        history.push('/')
    }

    const token = localStorage.getItem('token');
    if(token === null) logout()

    const [
        loading, 
        setLoading
    ] = useState(true);

    const [
        userState, 
        setUserState
    ] = useState(null);

    const getUser = async () => {
        let user = await UserService.findUser()
        setUserState(user)
        setLoading(false)
    }

    useEffect(() => {
        const usr = async () => await getUser()
        setUserState(usr)
    }, [])

    //{user.firstName.toUpperCase()}
    return (
        <>
            <Container>
                <Row style={{ marginTop:'3rem' }}>
                    <Col>
                        <h6>
                            <FcAbout /> Hola!
                        </h6>
                    </Col>
                    <Col className="text-end">
                        <Form onSubmit={handleSubmit(logout)}>
                            <Button variant="link" type="submit">
                                <FiLogOut /> Salir
                            </Button>
                        </Form>
                    </Col>
                </Row>
                {
                    !loading &&
                    <Row className="my-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Tabs variant="pills" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 nav-fill flex-column flex-md-row">
                                        <Tab eventKey="profile" title="Mi Perfil" className="mb-sm-3 mb-md-0">  
                                            <Profile user={userState} />
                                        </Tab>
                                        <Tab eventKey="hijos" title="Hijos" className="mb-sm-3 mb-md-0">
                                        <Childrens />
                                        </Tab>
                                        <Tab eventKey="controles" title="Controles" className="mb-sm-3 mb-md-0">
                                            <Controls />
                                        </Tab>
                                        <Tab eventKey="percentiles" title="Percentiles" className="mb-sm-3 mb-md-0">
                                            <Percentiles />
                                        </Tab>
                                        <Tab eventKey="vacunas" title="Vacunas" className="mb-sm-3 mb-md-0">
                                            <Calendar />
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                }
            </Container>
            <FooterLayout />
        </>
    )
}

export default AppLayout;