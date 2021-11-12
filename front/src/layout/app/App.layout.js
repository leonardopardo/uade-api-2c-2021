import React from 'react'
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
import faker from 'faker'
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

    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        fullName(uppercase) {
            return !uppercase 
                ? `${this.firstName} ${this.lastName}`
                : `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
        },
        email() {
            return `${this.firstName}@${this.lastName}.com`.toLocaleLowerCase()
        },
        phone: faker.phone.phoneNumber('(##) ####-####'),
        identity: faker.phone.phoneNumber("##.###.###"),
        age: '1995-06-01',
        img: 'marie.jpg'
    }

    return (
        <>
            <Container>
                <Row style={{ marginTop:'3rem' }}>
                    <Col>
                        <h6>
                            <FcAbout /> Hola {user.firstName.toUpperCase()}
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
                <Row className="my-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Tabs variant="pills" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 nav-fill flex-column flex-md-row">
                                    <Tab eventKey="profile" title="Mi Perfil" className="mb-sm-3 mb-md-0">  
                                        <Profile user={user} />
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
            </Container>
            <FooterLayout />
        </>
    )
}

export default AppLayout;