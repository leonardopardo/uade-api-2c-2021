import React from 'react'

import { Col, Row, Form, Button, FloatingLabel, Card } from 'react-bootstrap'
import { FiCheck, FiMail, FiLock, FiCalendar, FiPhone, FiSave } from 'react-icons/fi';


import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileSchema } from './validations/Profile.validation';
import Avatar from 'react-avatar';

const Profile = ({user}) => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(ProfileSchema)
    })

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    const profileSubmit = (data) => {
        console.log(data)
    }

    return(
        <>
            <Row>
                <Col lg={4} md={12}>
                    <Card>
                        <Avatar name={user.fullName()} />
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} md={10}> 
                    <Form onSubmit={handleSubmit(profileSubmit)}>

                        <Row>
                            <Col md>
                                {/* nombre */}
                                <Form.Group>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                        {...register("firstName")}
                                        className={isValid(errors.firstName)}
                                        defaultValue={user.firstName}
                                        type="text" 
                                        size="lg" 
                                        placeholder="Nombre"/>
                                    <p className="text-danger small">
                                        { errors?.firstName?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col md>
                                {/* apellido */}
                                <Form.Group>
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control 
                                        {...register("lastName")}
                                        className={isValid(errors.lastName)}
                                        defaultValue={user.lastName}
                                        type="text" 
                                        size="lg" />
                                    <p className="text-danger small">
                                        { errors?.lastName?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md>
                                <Form.Group>
                                    <Form.Label><FiCalendar /> Fecha de Nacimiento</Form.Label>
                                    <Form.Control 
                                        {...register("edad")} 
                                        defaultValue={user.edad}
                                        size="lg"
                                        type="date" />
                                    <p className="text-danger small">
                                        { errors?.edad?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label><FiCalendar /> Documento (DNI)</Form.Label>
                                    <Form.Control 
                                        {...register("dni")} 
                                        defaultValue={user.dni}
                                        size="lg"
                                        type="text" />
                                    <p className="text-danger small">
                                        { errors?.dni?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col md={8}>
                                <Form.Group className="mb-3">
                                    <Form.Label><FiMail /> Email</Form.Label>
                                    <Form.Control
                                        {...register('email')}
                                        className={isValid(errors.email)}
                                        defaultValue={user.email()}
                                        type="email" 
                                        size="lg" />
                                    <p className="text-danger small">
                                        { errors?.email?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label><FiPhone /> Teléfono</Form.Label>
                                    <Form.Control
                                        {...register('phone')}
                                        className={isValid(errors.phone)}
                                        defaultValue={user.phone}
                                        type="text" 
                                        size="lg" />
                                    <p className="text-danger small">
                                        { errors?.phone?.message }
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* email */}
                        

                        {/* password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><FiLock /> Nueva Contraseña</Form.Label>
                            <FloatingLabel label="Ingresar nueva contraseña">
                                <Form.Control 
                                {...register("password")} 
                                type="password" 
                                placeholder="Password" 
                                className={isValid(errors.password)} />
                            </FloatingLabel>
                            <p className="text-danger small">
                                { errors?.password?.message }
                            </p>
                        </Form.Group>

                        {/* confirm password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                            <FloatingLabel label="Escriba nuevamente la contraseña">
                                <Form.Control 
                                    {...register("confirmPassword")} 
                                    type="password" 
                                    placeholder="Password" 
                                    className={isValid(errors.confirmPassword)} />
                            </FloatingLabel>
                            <p className="text-danger small">
                                { errors?.confirmPassword?.message }
                            </p>
                        </Form.Group>


                        <Button variant="primary" type="submit" size="lg"><FiSave /> Actualizar</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Profile