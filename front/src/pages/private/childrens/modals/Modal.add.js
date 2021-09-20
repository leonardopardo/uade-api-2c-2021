import React, { useState } from 'react'

import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FiPlus, FiX, FiSave } from 'react-icons/fi'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const ModalChildreAdd = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver()
    })

    const addChildrenSubmit = (data) => {
        console.log(data)
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    const allergi =  [
        {value:'acaros', label:'ácaros'.toUpperCase()},
        {value:'polen', label:'polen'.toUpperCase()},
        {value:'pelo-animal', label:'pelo de animal'.toUpperCase()},
        {value:'picadura-insecto', label:'picadura insecto'.toUpperCase()},
        {value:'moho', label:'moho'.toUpperCase()},
        {value:'alimentos', label:'alimentos'.toUpperCase()},
        {value:'latex', label:'latex'.toUpperCase()},
        {value:'fragancias', label:'fragancias'.toUpperCase()},
        {value:'otras', label:'otras'.toUpperCase()}
    ]

    const chronic = [
        {value:'celiaquia', label:'celiaquia'.toUpperCase()},
        {value:'intolerancia-lactosa', label:'intolerancia a la lactosa'.toUpperCase()},
        {value:'diabetes', label:'diabetes'.toUpperCase()},
        {value:'otras', label:'otras'.toUpperCase()},
    ]

    const animatedComponents = makeAnimated();

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
                <Modal.Title>Agregar Hijo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(addChildrenSubmit)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                        {...register("firstName")} 
                                        type="text" 
                                        placeholder="Ingresa el nombre" 
                                        size="md" 
                                        className={isValid(errors.firstName)} />
                                    <p className="text-danger small">
                                        {errors.firstName && errors.firstName.message}
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control 
                                        {...register("lastName")} 
                                        type="text" 
                                        placeholder="Ingresa el apellido" 
                                        size="md" 
                                        className={isValid(errors.lastName)} />
                                    <p className="text-danger small">
                                        {errors.lastName && errors.lastName.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Fecha de Nacimiento</Form.Label>
                                    <Form.Control 
                                        {...register("age")} 
                                        type="date" 
                                        size="md" 
                                        className={isValid(errors.age)} />
                                    <p className="text-danger small">
                                        {errors.age && errors.age.message}
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Grupo Sanguíneo</Form.Label>
                                    <Form.Select
                                        {...register("blod")} 
                                        type="text" 
                                        size="md" 
                                        className={isValid(errors.age)}>
                                            <option>Seleccione tipo</option>
                                            <option value="0-positivo">o+</option>
                                            <option value="0-negativo">o-</option>
                                            <option value="A-positivo">A+</option>
                                            <option value="A-negativo">A-</option>
                                            <option value="B-positivo">B+</option>
                                            <option value="B-negativo">B-</option>
                                            <option value="AB-positivo">AB+</option>
                                            <option value="AB-negativo">AB-</option>
                                    </Form.Select>
                                    <p className="text-danger small">
                                        {errors.age && errors.age.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Alergias</Form.Label>
                                    <Select
                                        {...register("allergi")}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        options={allergi}
                                        />
                                    <p className="text-danger small">
                                        {errors?.allergi?.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enfermedades Crónicas</Form.Label>
                                    <Select 
                                        {...register("chronic")} 
                                        options={chronic}
                                        className={isValid(errors.chronic)} />
                                    <p className="text-danger small">
                                        {errors?.chronic?.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Otra Información</Form.Label>
                                    <Form.Control
                                        {...register("information")} 
                                        as="textarea" 
                                        type="text" 
                                        rows={5}
                                        className={isValid(errors.age)} />
                                    <p className="text-danger small">
                                        {errors?.age?.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
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

export default ModalChildreAdd

// información de los niños a controlar 
/**
 * nombre, 
 * fecha de nacimiento, 
 * grupo sanguíneo, 
 * alergias, 
 * enfermedades crónicas (celiaquía, intolerancia lactosa, diabetes, etc.)
 */

