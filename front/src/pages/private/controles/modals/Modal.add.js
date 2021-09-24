import React, { useState } from 'react'

import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FiPlus, FiX, FiSave } from 'react-icons/fi'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const ModalControlAdd = ({children}) => {

    const [showMed, setShowMed] = useState(false);
    const handleMedChange = () => {
        if(showMed){
            setShowMed(false);
        }
        else{
            setShowMed(true);
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver()
    })

    const addControlSubmit = (data) => {
        console.log(data)
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return(
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                <FiPlus /> Agregar
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                <Modal.Title>Agregar Control</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(addControlSubmit)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Niño</Form.Label>
                                    <Form.Select
                                        {...register("blod")} 
                                        type="text" 
                                        size="md" 
                                        className={isValid(errors.age)}>
                                            {
                                                children.map((item) => <option value={item}>{item}</option>)
                                            }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control 
                                        size="md"
                                        type="date" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Peso</Form.Label>
                                    <Form.Control type="text" placeholder="15kg"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Altura</Form.Label>
                                    <Form.Control type="text" placeholder="1.32m"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Diametro Cabeza</Form.Label>
                                    <Form.Control type="text" placeholder=".30m"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Observaciones</Form.Label>
                                    <Form.Control type="textfield" placeholder="-"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Form.Check inline
                                    type="Checkbox"
                                    name="Check"
                                    label="Medicamento Recetado"
                                    checked={showMed}
                                    onChange={handleMedChange}
                        />
                        {showMed &&
                            <><Row>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Medicamento</Form.Label>
                                        <Form.Control type="textfield" placeholder="N/A"></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Dosis</Form.Label>
                                            <Form.Control type="textfield" placeholder="N/A"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Periodo</Form.Label>
                                            <Form.Control type="textfield" placeholder="N/A"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Estudios realizados</Form.Label>
                                            <Form.Control type="textfield" placeholder="N/A"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Resultados</Form.Label>
                                            <Form.Control type="textfield" placeholder="N/A"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row></>     
                        }
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        <FiX /> Cerrar
                    </Button>
                    <Button variant="outline-primary">
                        <FiSave /> Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalControlAdd

// información de los niños a controlar 
/**
 * nombre, 
 * fecha de nacimiento, 
 * grupo sanguíneo, 
 * alergias, 
 * enfermedades crónicas (celiaquía, intolerancia lactosa, diabetes, etc.)
 */

