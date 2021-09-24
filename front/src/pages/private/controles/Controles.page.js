import React from 'react'
import { Col, Row, Table, Card, Button, Form } from 'react-bootstrap'
import ModalControlAdd from './modals/Modal.add';


const Controls = () => {

    const controls = ["1", "2", "3"];

    const childrens = ["Juana", "Pablo", "Pedro"];

    const getControls = () => {

        let listControls = controls.map( element => {
            return( 
                <tr>
                    <th> Hijo </th>
                    <th> Fecha </th>
                    <th> Peso </th>
                    <th> Altura </th>
                    <th> Diametro </th>
                </tr>
            )
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
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Hijo</th>
                                <th>Fecha</th>
                                <th>Peso</th>
                                <th>Altura</th>
                                <th>Diámetro Craneal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getControls()}
                        </tbody>
                    </Table>
            </section>
        </>
    )
}

export default Controls