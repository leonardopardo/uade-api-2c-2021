import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import ModalChildreAdd from './modals/Modal.add'

const Childrens = () => {

    const childrens = [];

    const getChildrens = () => {

        let listChildrens = childrens.map( element => {
            return <Card>{element}</Card>
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