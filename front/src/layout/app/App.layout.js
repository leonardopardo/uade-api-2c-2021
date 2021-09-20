import React from 'react'
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap'

import { FcAbout } from 'react-icons/fc'

import Avatar from 'react-avatar'

import faker from 'faker'

import Profile from './../../pages/private/profile/Profile.page';
import Calendar from './../../pages/private/calendar/Calendar.page';

import FooterLayout from './../site/Footer.layout';

const AppLayout = () => {
    
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
                    <h6>
                        <FcAbout /> Hola {user.firstName.toUpperCase()}
                    </h6>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card className="rounded">
                            <Card.Body>
                                <Row>
                                    <Col lg={2} md={4} sm={12} className="text-center" >
                                        <Avatar src={`upload/${user.img}`} name={user.fullName()} round={true} />
                                    </Col>
                                    <Col lg={10} md={8} sm={12} className="text-center text-md-start">
                                        <h4>{user.fullName(true)}</h4>
                                        {user.email()}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <Tabs variant="pills" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 rounded">
                            <Tab eventKey="profile" title="Mi Perfil">  
                                <Profile user={user} />
                            </Tab>
                            <Tab eventKey="home" title="Controles Pediátricos">
                                
                            </Tab>
                            <Tab eventKey="calendar" title="Calendario Vacunación">
                                <Calendar />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            <FooterLayout fixed />
        </>
    )
}

export default AppLayout;