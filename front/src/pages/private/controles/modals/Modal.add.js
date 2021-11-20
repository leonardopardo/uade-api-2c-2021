import React, { useState } from 'react'

import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FiPlus, FiX, FiSave } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { NewControlSchema } from '../validations/NewControl.validation'

import ControlService from '../../../../services/ControlService'

import toast from 'react-hot-toast';

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

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(NewControlSchema)
    })

    const addControlSubmit = async (data) => {
        data['meds_checked'] = showMed
        try {
            const res = await ControlService.create(data);
            toast.success(res.message)
            setShow(false)
            reset()
        } catch (err) {
            toast.error(err.response.data.error)
        }
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
                    <Form id="newControlForm" onSubmit={handleSubmit(addControlSubmit)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Niño</Form.Label>
                                    <Form.Select
                                        {...register("identity")} 
                                        type="text" 
                                        size="md" 
                                        className={isValid(errors.age)}>
                                            {
                                                children.map((item) => <option value={item.value}>{item.label}</option>)
                                            }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control 
                                        {...register("date")} 
                                        type="date" 
                                        size="md"
                                        className={isValid(errors.age)} />
                                    <p className="text-danger small">
                                        {errors.age && errors.age.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Peso (kg)</Form.Label>
                                    <Form.Control 
                                        {...register("weight")} 
                                        type="text"   
                                        size="md"
                                        placeholder="Ej: 30" 
                                        className={isValid(errors.lastName)} />
                                    <p className="text-danger small">
                                        {errors.lastName && errors.lastName.message}
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Altura (cm)</Form.Label>
                                    <Form.Control 
                                        {...register("height")} 
                                        type="text"   
                                        size="md"
                                        placeholder="Ej: 132" 
                                        className={isValid(errors.lastName)} />
                                    <p className="text-danger small">
                                        {errors.lastName && errors.lastName.message}
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Diametro Cabeza (cm)</Form.Label>
                                    <Form.Control 
                                        {...register("diameter")} 
                                        type="text"  
                                        size="md"
                                        placeholder="Ej: 20" 
                                        className={isValid(errors.lastName)} />
                                    <p className="text-danger small">
                                        {errors.lastName && errors.lastName.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label>Observaciones</Form.Label>
                                    <Form.Control 
                                        {...register("observations")} 
                                        type="text"  
                                        size="md"
                                        placeholder="-" 
                                        className={isValid(errors.lastName)} />
                                    <p className="text-danger small">
                                        {errors.lastName && errors.lastName.message}
                                    </p>
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
                                        <Form.Control 
                                            {...register("med_name")} 
                                            type="text"  
                                            size="md"
                                            defaultValue="N/A"
                                            className={isValid(errors.lastName)} />
                                        <p className="text-danger small">
                                            {errors.lastName && errors.lastName.message}
                                        </p>
                                    </Form.Group>
                                </Col>
                            </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Dosis</Form.Label>
                                            <Form.Control 
                                                {...register("dosage")} 
                                                type="text"  
                                                size="md"
                                                defaultValue="N/A"
                                                className={isValid(errors.lastName)} />
                                            <p className="text-danger small">
                                                {errors.lastName && errors.lastName.message}
                                            </p>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Periodo</Form.Label>
                                            <Form.Control 
                                                {...register("take_until")} 
                                                type="date"  
                                                size="md"
                                                className={isValid(errors.lastName)} />
                                            <p className="text-danger small">
                                                {errors.lastName && errors.lastName.message}
                                            </p>
                                        </Form.Group>
                                    </Col>
                                </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Estudios realizados</Form.Label>
                                            <Form.Control 
                                                {...register("studies")} 
                                                type="text"  
                                                size="md"
                                                defaultValue="N/A"
                                                className={isValid(errors.lastName)} />
                                            <p className="text-danger small">
                                                {errors.lastName && errors.lastName.message}
                                            </p>
                                        </Form.Group>
                                    </Col>
                                </Row><Row>
                                    <Col>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Resultados</Form.Label>
                                            <Form.Control 
                                                {...register("results")} 
                                                type="text"  
                                                size="md"
                                                defaultValue="N/A"
                                                className={isValid(errors.lastName)} />
                                            <p className="text-danger small">
                                                {errors.lastName && errors.lastName.message}
                                            </p>
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
                    <Button variant="outline-primary" type="submit" form="newControlForm">
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

