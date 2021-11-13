// React
import React, { useState } from 'react';

// Router
import { Link, useLocation } from 'react-router-dom';

// layout design components
import { Container, Row, Col, Form, Button, FloatingLabel, Alert, FormControl } from 'react-bootstrap';
import { FiCheck, FiMail, FiLogIn, FiLock, FiRefreshCw, FiAlertOctagon } from 'react-icons/fi';

// layout self components


// validations
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfirmPasswordSchema } from './validations/ConfirmPassword.validation';

// other
import queryString from 'query-string';
import ButtonSpinner from '../../../components/ButtonSpinner';
import UserService from '../../../services/UserService'

const ConfirmPasswordPage = () => {

    const { search } = useLocation();
    const values = queryString.parse(search);

    const [
        loading,
        setLoading
    ] = useState(false)

    const [
        restoreMessage, 
        setRestoreMessage
    ] = useState("");

    const [
        restoreVariant, 
        setRestoreVariant
    ] = useState();

    const {register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: yupResolver(ConfirmPasswordSchema)
    })

    const confirmPasswordSubmit = async (data) => {
        data['user'] = values.user;
        data['token'] = values.token;

        try {
            let res = await UserService.confirmPassword(data);
            setRestoreVariant('success')
            setRestoreMessage(res.data.message)
            reset()
        } catch (err) {
            setRestoreVariant('danger')
            setRestoreMessage(err.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return(
        <>
            <Container className="px-4 py-5">
                <Row className="align-items-center g-lg-5 py-5">
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
                                <div className='form-control' >{values.user}</div>
                                <Form.Control
                                    {...register("email")} 
                                    type="hidden"
                                    value={values.user} />
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
                                {
                                    !loading ?
                                    <Button variant="primary" type="submit" size="lg">
                                        <FiRefreshCw /> Resetear Contraseña
                                    </Button>
                                    :
                                    <ButtonSpinner />
                                }
                            </div>
                            
                            <small className="">
                                Ya tengo una cuenta. <Link to="/login"><FiLogIn /> Ir al login</Link>
                            </small>
                        </Form>
                    </Col>
                </Row>
                {
                    restoreMessage !== "" &&
                    <Row>
                        <Col className="col-md-10 col-lg-6 mx-auto">
                            <Alert variant={restoreVariant}>
                                <Alert.Heading>Atención!</Alert.Heading>
                                {restoreMessage}
                            </Alert>
                        </Col>
                    </Row>
                }
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


export default ConfirmPasswordPage