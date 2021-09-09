import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiLogIn, FiCheck, FiLock, FiMail } from "react-icons/fi"; 

import FooterLayout from '../../../layout/site/Footer.layout';
import NavLayout from '../../../layout/site/Nav.layout';

// validations
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from './validations/Register.validation'


const RegisterPage = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(RegisterSchema)
    })

    const registerFormSubmit = (data) => {
        console.log(data)
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return (
        <>
            <NavLayout />
            <Container xl={{ span: 10 }} xxl={{ span: 8 }} className="px-4 py-5">
                <Row className="align-items-center g-lg-5 py-5">
                    <Col lg={{ span: 8 }} className="text-center text-lg-start">
                        <h2>
                            El registro del crecimiento de tus hijos <br /> 
                            al alcance de tu mano.
                        </h2>
                        <h6 style={{ lineHeight: '2rem' }}>
                            <strong>PADRES AL DÍA</strong> es una aplicación que te permitirá tener
                            registrada, actualizada y siempre disponible la información sobre el crecimiento
                            de tus hijos.
                            Con nuestra herramienta podrás: 
                            <ul>
                                <li>Consultá el calendario de Vacunas y registrá la fecha de aplicación</li>
                                <li>Controlá los percentiles de la talla y el peso</li>
                                <li>Registrar los eventos importantes en la vida de tus hijos.</li>
                            </ul>
                        </h6>
                    </Col>
                    <Col md={{ span: 10 }} lg={{ span: 4 }} className="bg-light p-4 shadow rounded">
                        <Form onSubmit={handleSubmit(registerFormSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FiMail /> Email</Form.Label>
                                <Form.Control 
                                    {...register("username")} 
                                    type="email" 
                                    placeholder="Ingresa tu email" 
                                    size="lg" 
                                    className={isValid(errors.username)} />
                                <p className="text-danger small">
                                    {errors.username && errors.username.message}
                                </p>
                                <Form.Text className="text-muted">
                                    Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FiLock /> Contraseña</Form.Label>
                                <Form.Control 
                                    {...register("password")} 
                                    type="password" 
                                    placeholder="Password" 
                                    size="lg" 
                                    className={isValid(errors.password)} />
                                <p className="text-danger small">
                                    {errors.password && errors.password.message}
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                                <Form.Control 
                                    {...register("confirmPassword")} 
                                    type="password" 
                                    placeholder="Password" 
                                    size="lg" 
                                    className={isValid(errors.confirmPassword)} />
                                <p className="text-danger small">
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </p>
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    Registrarme
                                </Button>
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. <Link to="/login"><FiLogIn /> Ir al login</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout fixed />
        </>
    )
}


export default RegisterPage