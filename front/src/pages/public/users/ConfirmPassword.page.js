// React
import React from 'react';

// Router
import { Link } from 'react-router-dom';

// layout design components
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { FiCheck, FiMail, FiLogIn, FiLock, FiRefreshCw, FiAlertOctagon } from 'react-icons/fi';

// layout self components
import FooterLayout from '../../../layout/site/Footer.layout';

// validations
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfirmPasswordSchema } from './validations/ConfirmPassword.validation';

const ConfirmPasswordPage = () => {

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(ConfirmPasswordSchema)
    })

    const confirmPasswordSubmit = (data) => {
        console.log(data)
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return(
        <>
            <Container>
                <Row>
                    <Col md={{ span: 8 }} className="m-auto mt-4 mb-4 text-center">
                        <h3 className="text-center">
                            <FiCheck /> Ingresá tus nuevas credenciales
                        </h3>
                        <p>
                            <FiAlertOctagon /> Serás redirigido de forma automática al login.
                        </p>
                    </Col>
                    <Col md={{ span: 6 }} className="m-auto bg-light p-4 shadow rounded">
                        <Form onSubmit={ handleSubmit(confirmPasswordSubmit) }>
                            
                            {/* username */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FiMail /> Email</Form.Label>
                                    <div className="form-control form-control-lg">mail@mail.com</div>
                                <Form.Text className="text-muted">
                                    Te enviaremos un mail, por favor revisalo.
                                </Form.Text>
                            </Form.Group>

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
                                    { errors.password && errors.password.message }
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
                                    { errors.confirmPassword && errors.confirmPassword.message }
                                </p>
                            </Form.Group>

                            <div className="d-grid gap-2 mb-2">
                                <Button variant="primary" type="submit" size="lg">
                                    <FiRefreshCw /> Resetear Contraseña
                                </Button>
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. <Link to="/login"><FiLogIn /> Ir al login</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </>
    )
}


export default ConfirmPasswordPage