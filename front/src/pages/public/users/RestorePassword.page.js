// react5
import React from 'react';

// router
import { Link } from 'react-router-dom';

// layout design components
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { FiCheck, FiMail, FiLogIn, FiSend } from 'react-icons/fi';

// layout self component
import FooterLayout from '../../../layout/site/Footer.layout';


// validation form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RestorePasswordSchema } from './validations/Restore.validation';

const RestorePasswordPage = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(RestorePasswordSchema)
    })

    const restorePasswordSubmit = (data) => {
        console.log(data)
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return (
        <>
            <Container className="px-4 py-5">
                <Row className="align-items-center g-lg-5 py-5">
                    <Col md={{ span: 8 }} className="m-auto mb-4 text-center">
                        <h3 className="text-center">
                            <FiCheck /> Ingresá el email con el que te registraste
                        </h3>
                        <p>
                            Revisá tu correo y seguí los pasos para recuperar tu contraseña
                        </p>
                    </Col>
                    <Col md={{ span: 6}} className="m-auto bg-light p-4 shadow rounded">
                        <Form onSubmit={handleSubmit(restorePasswordSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FiMail /> Email con el que te suscribiste.</Form.Label>
                                <FloatingLabel label="Email">
                                    <Form.Control 
                                        {...register("email")} 
                                        type="email" 
                                        placeholder="Ingresa tu email" 
                                        size="lg" className={isValid(errors.email)} />
                                </FloatingLabel>
                                <p className="text-danger small">
                                    {errors.email && errors.email.message}
                                </p>
                                <Form.Text className="text-muted">
                                Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    <FiSend /> Enviar Link
                                </Button>
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. 
                                <Link to="/login"><FiLogIn /> Ir a Login</Link>
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
            </Container>
            <FooterLayout fixed />
        </>
    )
}

export default RestorePasswordPage;