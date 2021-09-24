import React from 'react'
import { Col, Row, Card, Button, Container } from 'react-bootstrap'
import ModalControlAdd from './modals/Modal.add';
import WeightChart from './graphs/weight.page';
import HeightChart from './graphs/height.page';
import HeadCircumferenceChart from './graphs/headCircumference.page';


const Controls = () => {

    const controls = [];

    const childrens = ["Juana", "Pablo", "Pedro"];

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
                            <ModalControlAdd children={childrens} />
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
                    <hr></hr>
                    <Row className="my-4">
                        {
                            childrens.map((item) => <Col md="1"><Button variant="outline-dark">{item}</Button></Col>)
                        }
                    </Row>
                    <hr></hr>
                    <WeightChart />
                    <hr></hr>
                    <HeightChart />
                    <hr></hr>
                    <HeadCircumferenceChart />
            </section>
        </>
    )
}

export default Controls