import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import ModalControlAdd from './modals/Modal.add';


const Controls = () => {

    const controls = [];

    const getControls = () => {

        let listControls = controls.map( element => {
            return <li>{element}</li>
        })

        return controls.length === 0
            ? <h4 className="text-center text-muted fw-light">Todavía no agregaste información</h4>
            : listControls
    }
    
    return(
        <>
            <section>
                    <Row className="my-2">
                        <Col>
                            <ModalControlAdd />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col>
                            <Card>
                                <Card.Body>
                                    {getControls()}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </section>
        </>
    )
}

export default Controls