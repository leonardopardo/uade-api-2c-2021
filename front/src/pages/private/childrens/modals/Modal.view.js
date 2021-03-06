import React, { useState } from 'react'

import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FiPlus, FiX, FiSave, FiImage, FiInfo } from 'react-icons/fi'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ViewChildSchema } from './../validations/ViewChild.validation'
import ChildService from '../../../../services/ChildService'

import toast from 'react-hot-toast';

const ModalChildrenView = (props) => {

    const [child, setChild] = useState(props.child)

    const [show, setShow] = useState(false);

    const [selectedChronicOption, setSelectedChronicOption] = useState(child.diseases);
    
    const [selectedAllergiOption, setSelectedAllergiOption] = useState(child.allergies);
    
    const [
        selectedFile,
        setSelectedFile
    ] = useState()
    
    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(ViewChildSchema)
    })

    const addChildrenSubmit = async (data) => {
        
        try {
            
            if(selectedFile){
                const uploadImage = await ChildService.uploadImage(selectedFile) 
                data['avatar'] = uploadImage
            }

            data['allergi'] = selectedAllergiOption
            data['chronic'] = selectedChronicOption
            data['identity'] = child.identity
            
            const res = await ChildService.updateChildren(data);
            setChild(res.child)
            toast.success(res.data.message)
            setShow(false)
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    const allergi =  [
        {value:'acaros', label:'??caros'.toUpperCase()},
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
                <FiPlus /> Ver Informacion
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
                    <Form id="updateChildForm" onSubmit={handleSubmit(addChildrenSubmit)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                        {...register("firstName")} 
                                        type="text" 
                                        placeholder="Ingresa el nombre"
                                        defaultValue={child.firstName} 
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
                                        defaultValue={child.lastName}  
                                        size="md" 
                                        className={isValid(errors.lastName)} />
                                    <p className="text-danger small">
                                        {errors.lastName && errors.lastName.message}
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label><FiInfo /> Documento (DNI)</Form.Label>
                                    <Form.Control 
                                        {...register("identity")}
                                        size="md"
                                        type="text"
                                        value={child.identity}
                                        placeholder="Ingresa el DNI" />
                                    <p className="text-danger small">
                                        { errors?.identity?.message }
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
                                        defaultValue={child.age} 
                                        className={isValid(errors.age)} />
                                    <p className="text-danger small">
                                        {errors.age && errors.age.message}
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Grupo Sangu??neo</Form.Label>
                                    <Form.Select
                                        {...register("blod")} 
                                        type="text" 
                                        size="md"
                                        defaultValue={child.bloodType}  
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
                                        isMulti
                                        defaultValue={selectedAllergiOption}
                                        onChange={setSelectedAllergiOption}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        options={allergi} />
                                    <p className="text-danger small">
                                        {errors?.allergi?.message}
                                    </p>                                  
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enfermedades Cr??nicas</Form.Label>
                                    <Select 
                                        {...register("chronic")} 
                                        isMulti
                                        defaultValue={selectedChronicOption}
                                        onChange={setSelectedChronicOption}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        options={chronic} />
                                    <p className="text-danger small">
                                        {errors?.chronic?.message}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><FiImage /> Avatar</Form.Label>
                                    
                                    <Form.Control 
                                            {...register("avatar")} 
                                            type="file" 
                                            size="md"
                                            className={isValid(errors.avatar)} onChange={changeHandler} />
                                    
                                    <p className="text-danger small">
                                        { errors?.avatar?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Otra Informaci??n</Form.Label>
                                    <Form.Control
                                        {...register("information")} 
                                        as="textarea" 
                                        type="text"
                                        defaultValue={child.extra_info}  
                                        rows={4} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    <FiX /> Cerrar
                </Button>
                <Button variant="outline-primary" type="submit" form="updateChildForm">
                    <FiSave /> Actualizar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalChildrenView