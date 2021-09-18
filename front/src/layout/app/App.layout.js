import React from 'react'
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap'

import {FcApproval} from 'react-icons/fc'

import Avatar from 'react-avatar'

import faker from 'faker'

import Sonnet from '../../componentes/Sonnet'
import Profile from './../../pages/private/profile/Profile.page';
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
        dni: faker.phone.phoneNumber("##.###.###"),
        edad: '1995-06-01'
    }

    return (
        <>
            <Container>
                <Row style={{ marginTop:'5rem' }}>
                    <h6>
                        <FcApproval /> Hola {user.firstName.toUpperCase()}
                    </h6>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card className="rounded">
                            <Card.Body>
                                <Row>
                                    <Col lg={2} md={4} sm={12} className="text-center" >
                                        <Avatar name={user.fullName()} round={true} />
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
                        <Tabs variant="pills" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="profile" title="Mi Perfil">  
                                <Profile user={user} />
                            </Tab>
                            <Tab eventKey="home" title="Home">
                                <Sonnet />
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                                <Sonnet />
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