import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { FiLogIn, FiCheck, FiLock, FiMail, FiUserCheck } from "react-icons/fi"

// validations
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from './validations/Register.validation'


const RegisterPage = () => {

    const [registerMessage, setRegisterMessage] = useState("")
    const [registerVariant, setRegisterVariant] = useState("")
    const [registerError, setRegisterError] = useState("")

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(RegisterSchema)
    })

    const apiUrl = "http://localhost:4000/users/create"

    const registerFormSubmit = (data) => {

        axios
            .post(apiUrl, data)
            .then(res => {
                setRegisterVariant("success")
                setRegisterMessage(res.data.message)
                setRegisterError("")
                reset()
            })
            .catch(err => {
                setRegisterVariant("danger")
                setRegisterMessage(err.response.data.message)
                setRegisterError(err.response.data.error)
            })
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return (
        <>
            <Container xl={{ span: 10 }} xxl={{ span: 8 }} className="px-4 py-5">
                <Row className="align-items-center g-lg-5 py-5">
                    <Col lg={{ span: 7 }} className="text-center text-lg-start">
                        <h2>
                            El registro del crecimiento de tus hijos <br /> 
                            al alcance de tu mano.
                        </h2>
                        <h6 style={{ lineHeight: '2rem' }}>
                            <strong>PADRES AL DÍA</strong> es una aplicación que te permitirá tener
                            registrada, actualizada y siempre disponible la información sobre el crecimiento
                            de tus hijos.
                            Con nuestra herramienta podrás: 
                            <ul className="list-unstyled">
                                <li><FiCheck /> Consultá el calendario de Vacunas y registrá la fecha de aplicación</li>
                                <li><FiCheck /> Controlá los percentiles de la talla y el peso</li>
                                <li><FiCheck /> Registrar los eventos importantes en la vida de tus hijos.</li>
                            </ul>
                        </h6>
                    </Col>
                    <Col md={{ span: 10 }} lg={{ span: 5 }} >
                        {
                            registerError !== "" ?
                            <Row>
                                <Col className="col-md-12 col-lg-12 mx-auto">
                                    <Alert variant={registerVariant}>
                                        <Alert.Heading>{registerMessage}</Alert.Heading>
                                        {registerError}
                                    </Alert>
                                </Col>
                            </Row>
                            :
                            <Row>
                                <Col className="col-md-12 col-lg-12 mx-auto">
                                    <Alert variant={registerVariant}>
                                        {registerMessage}
                                    </Alert>
                                </Col>
                            </Row>
                        }
                        <Row>
                            <Col className="bg-light my-4 p-4 shadow rounded">
                                <Form onSubmit={handleSubmit(registerFormSubmit)}>

                                    <Form.Group className="mb-3">
                                        <Form.Label><FiUserCheck /> Nombre</Form.Label>
                                        <Form.Control 
                                            {...register("firstName")} 
                                            type="text" 
                                            placeholder="Ingresa tu nombre" 
                                            size="md" 
                                            className={isValid(errors.firstName)} />
                                        <p className="text-danger small">
                                            {errors.firstName && errors.firstName.message}
                                        </p>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control 
                                            {...register("lastName")} 
                                            type="text" 
                                            placeholder="Ingresa tu Apellido" 
                                            size="md" 
                                            className={isValid(errors.lastName)} />
                                        <p className="text-danger small">
                                            {errors.lastName && errors.lastName.message}
                                        </p>
                                    </Form.Group>


                                    <Form.Group className="mb-3">
                                        <Form.Label><FiMail /> Email</Form.Label>
                                        <Form.Control 
                                            {...register("username")} 
                                            type="email" 
                                            placeholder="Ingresa tu email" 
                                            size="md" 
                                            className={isValid(errors.username)} />
                                        <p className="text-danger small">
                                            {errors.username && errors.username.message}
                                        </p>
                                        <Form.Text className="text-muted">
                                            Te enviaremos un mail, por favor revisalo.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label><FiLock /> Contraseña</Form.Label>
                                        <Form.Control 
                                            {...register("password")} 
                                            type="password" 
                                            placeholder="Password" 
                                            size="md" 
                                            className={isValid(errors.password)} />
                                        <p className="text-danger small">
                                            {errors.password && errors.password.message}
                                        </p>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                                        <Form.Control 
                                            {...register("confirmPassword")} 
                                            type="password" 
                                            placeholder="Password" 
                                            size="md" 
                                            className={isValid(errors.confirmPassword)} />
                                        <p className="text-danger small">
                                            {errors.confirmPassword && errors.confirmPassword.message}
                                        </p>
                                    </Form.Group>

                                    <div className="d-grid gap-2 mb-2">
                                        <Button variant="primary" type="submit" size="md">
                                            Registrarme
                                        </Button>
                                    </div>
                                    
                                    <small className="">
                                        Ya tengo una cuenta. <Link to="/login"><FiLogIn /> Ir al login</Link>
                                    </small>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-10 col-lg-3 mx-auto">
                                <p className="text-center">
                                    <Link to="/">Ir al Home</Link>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default RegisterPage