import React from 'react'
import { Row, Col, Form, Button, Container, InputGroup } from 'react-bootstrap'
import FooterLayout from '../../../layout/site/Footer.layout'
import NavLayout from '../../../layout/site/Nav.layout'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from './validations/Contact.validation'


import { FiInfo, FiMail, FiTwitter } from 'react-icons/fi'
import { FaFacebook, FaRegUserCircle } from 'react-icons/fa'

const ContactPage = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(ContactSchema)
    })

    const contactFormSubmit = (data) => {
        console.log(data)
    }

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    return (
        <>
            <NavLayout />
            <section className="section">
                <Container>
                    <Row className="py-4">
                        <Col sm={12} className="m-auto text-center">
                            <h1 className="">Dejanos tu consulta</h1>
                            <p>Dejanos una consulta que en breve te estaremos respondendo</p>
                        </Col>
                    </Row>
                    <Row className="py-4">
                        <Col md={5} >
                            <div>
                                <h2>Datos de Contacto</h2>
                                <hr />
                                <ul className="list-unstyled">
                                    <li><h5><FiMail /> info@padresaldia.com</h5></li>
                                    <li><h5><FiTwitter /> @PadresAlDia</h5></li>
                                    <li><h5><FaFacebook /> /PadresAlDia</h5></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={7} className="m-auto">
                            <h2> Dejanos un Mensaje</h2>
                            <hr />
                            <Form onSubmit={handleSubmit(contactFormSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><FaRegUserCircle /></InputGroup.Text>
                                        <Form.Control 
                                            {...register("name")} 
                                            type="text" 
                                            placeholder="Ingresa tu nombre" 
                                            size="md" 
                                            className={isValid(errors.name)} />
                                    </InputGroup>
                                    <p className="text-danger small">
                                        {errors?.name?.message}
                                    </p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><FiMail /></InputGroup.Text>
                                        <Form.Control 
                                            {...register("email")} 
                                            type="text" 
                                            placeholder="Ingresa tu email" 
                                            size="md" 
                                            className={isValid(errors.email)} />
                                    </InputGroup>
                                    <p className="text-danger small">
                                        {errors?.email?.message}
                                    </p>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> Mensaje</Form.Label>
                                    <Form.Control 
                                        {...register("message")} 
                                        as="textarea" 
                                        rows={4} 
                                        className={isValid(errors.email)} />
                                    <p className="text-danger small">
                                        {errors?.email?.message}
                                    </p>
                                </Form.Group>

                                <div className="d-grid gap-2 mb-2">
                                    <Button variant="primary" type="submit" size="lg"> Enviar</Button>
                                </div>
                                <span className="small text-muted"><FiInfo /> En breve nos pondremos en contacto. Gracias!</span>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterLayout />           
        </>
    )
}

export default ContactPage