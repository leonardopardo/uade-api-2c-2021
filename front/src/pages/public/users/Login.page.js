// React
import React from 'react'

// Router
import { Link } from 'react-router-dom'

// layout Design Components
import { Row, Col, Form, Button, Container, FloatingLabel } from 'react-bootstrap'
import { FiUserCheck, FiUnlock, FiUserPlus, FiLogIn } from "react-icons/fi"

// images

// layout Self Components

// validations
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from './validations/Login.validation'

const LoginPage = () => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(LoginSchema)
    })

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    const loginSubmit = (data) => {
        console.log(data)
    }

    return(
        <>
            <Container fluid className="px-4 py-5">
                <Row className="align-items-center g-lg-5 py-5">
                    <Col className="col-md-10 mx-auto col-lg-3 p-4 shadow bg-light rounded">
                        <Row>
                            <Col>
                                <Form onSubmit={handleSubmit(loginSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><FiUserCheck /> Usuario</Form.Label>
                                        <FloatingLabel label="Email">
                                            <Form.Control 
                                                {...register("username")}
                                                className={isValid(errors.username)}
                                                type="email" 
                                                placeholder="Ingresa tu email" 
                                                size="sm" />
                                        </FloatingLabel>
                                        <p className="text-danger small">
                                            { errors.username && errors.username.message }
                                        </p>
                                        <Form.Text className="text-muted">
                                            Núnca compartiremos tu email con nadie.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label><FiUnlock /> Contraseña</Form.Label>
                                        <FloatingLabel label="Contraseña">
                                            <Form.Control 
                                                {...register("password")}
                                                className={isValid(errors.password)}
                                                type="password" 
                                                placeholder="Password"
                                                size="sm" />
                                        </FloatingLabel>
                                        <p className="text-danger small">
                                            { errors.password && errors.password.message}
                                        </p>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="switch" label="Recordarme" />
                                    </Form.Group>
                                    
                                    <small className="d-block mb-3">
                                        ¿No recordás tu contraseña? <Link to="/restore-password">Recuperar Ahora</Link>
                                    </small>

                                    <div className="d-grid gap-2 mb-2">
                                        <Button variant="primary" type="submit" size="lg">
                                            <FiLogIn /> Ingresar
                                        </Button>
                                    </div>
                                    
                                    <small>
                                        Todavía no tengo una cuenta. <br/>
                                        <Link to="/register"><FiUserPlus /> Crear una cuenta</Link>
                                    </small>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-10 col-lg-3 mx-auto">
                        <p className="text-center">
                            <Link to="/">Ir al Home</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage;