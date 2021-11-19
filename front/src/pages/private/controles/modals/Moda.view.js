import React, { useState, useEffect } from 'react'

import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi'


const ModalControlView = ({control}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                <FiEye />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                <Modal.Title>Mas Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control
                                        type="date" 
                                        size="md"
                                        defaultValue={control.date}
                                        disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Peso (kg)</Form.Label>
                                    <Form.Control
                                        type="text"   
                                        size="md"
                                        defaultValue={control.weight}
                                        disabled />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Altura (m)</Form.Label>
                                    <Form.Control
                                        type="text"   
                                        size="md"
                                        defaultValue={control.height}
                                        disabled />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Diametro Cabeza (cm)</Form.Label>
                                    <Form.Control
                                        type="text"  
                                        size="md"
                                        defaultValue={control.head_diam}
                                        disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Observaciones</Form.Label>
                                    <Form.Control
                                        type="text"  
                                        size="md"
                                        defaultValue={control.observations}
                                        disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        {
                            control.meds !== null &&
                            <><Row>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Medicamento</Form.Label>
                                        <Form.Control
                                            type="text"  
                                            size="md"
                                            defaultValue={control.meds.med_name}
                                            disabled />
                                    </Form.Group>
                                </Col>
                            </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Dosis</Form.Label>
                                            <Form.Control
                                                type="text"  
                                                size="md"
                                                defaultValue={control.meds.dosage}
                                                disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Periodo</Form.Label>
                                            <Form.Control
                                                type="date"  
                                                size="md"
                                                defaultValue={control.meds.take_until}
                                                disabled />
                                        </Form.Group>
                                    </Col>
                                </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Estudios realizados</Form.Label>
                                            <Form.Control
                                                type="text"  
                                                size="md"
                                                defaultValue={control.studies}
                                                disabled />
                                        </Form.Group>
                                    </Col>
                                </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Resultados</Form.Label>
                                            <Form.Control
                                                type="text"  
                                                size="md"
                                                defaultValue={control.meds.results}
                                                disabled />
                                        </Form.Group>
                                    </Col>
                                </Row></>     
                        }
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalControlView

// información de los niños a controlar 
/**
 * nombre, 
 * fecha de nacimiento, 
 * grupo sanguíneo, 
 * alergias, 
 * enfermedades crónicas (celiaquía, intolerancia lactosa, diabetes, etc.)
 */

