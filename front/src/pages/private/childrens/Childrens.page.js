import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import ModalChildreAdd from './modals/Modal.add'

import Avatar from 'react-avatar'

const Childrens = () => {

    const childrens = [
        {
            firstName: 'Nicolás',
            lastName: 'Pardo',
            age: '2011-10-04',
            bloodType: '0+',
            img: 'fd38ca051d52a34a959de8e02ae05ce6.jpg',
            fullName(){
                return `${this.firstName} ${this.lastName}`.toUpperCase()
            }
        }
    ];

    const getChildrens = () => {

        let listChildrens = childrens.map( child => {
            return(
                <Col lg={4}>
                    <Card className="shadow">
                        <Avatar size="100%" src={`/images/${child.img}`} name={child.fullName()} className="card-img-top rounded-top"/>
                        <Card.Body>
                            <span className="h6 icon-tertiary small">
                                <span className="fas fa-medal me-2">
                                    Edad: 9 años
                                </span>
                            </span>
                            <h3 className="h5 card-title mt-3">
                                {child.fullName()}
                            </h3>
                            <p className="card-text">
                                <span className="d-block">{child.bloodType}</span>
                            </p>
                            <Button variant="outline-primary">Ver Información</Button>
                        </Card.Body>
                    
                    </Card>
                </Col>
            )
        })

        return childrens.length === 0
            ? <h4 className="text-center text-muted fw-light">Todavía no agregaste información</h4>
            : listChildrens
    }
    
    return(
        <>
            <section>
                    <Row className="my-2">
                        <Col>
                            <ModalChildreAdd />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col>
                            <Card>
                                <Card.Body>
                                    {getChildrens()}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </section>
        </>
    )
}

export default Childrens