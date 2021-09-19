import React from 'react'
import { Row, Col, Form, Button, Container, InputGroup } from 'react-bootstrap'
import FooterFullLayout from '../../../layout/site/Footer.full.layout'
import NavLayout from '../../../layout/site/Nav.layout'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from './validations/Contact.validation'
import { FiMail } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'

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
                        <Col sm={7} className="m-auto text-center">
                            <h1 className="">Dejanos tu consulta</h1>
                            <p>Dejanos una consulta que en breve te estaremos respondendo</p>
                        </Col>
                    </Row>
                    <Row className="py-4">
                        <Col md={{ span: 7 }} className="m-auto p-4 ">
                            <h2> Contactenos</h2>
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
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>

                                <div className="d-grid gap-2 mb-2">
                                    <Button variant="primary" type="submit" size="lg"> Enviar</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterFullLayout />           
        </>
    )
}

export default ContactPage