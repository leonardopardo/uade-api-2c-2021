import React from 'react'

import { Col, Row, Form, Button, Card } from 'react-bootstrap'
import { FiCheck, FiMail, FiLock, FiCalendar, FiPhone, FiSave, FiInfo, FiImage } from 'react-icons/fi'
import Avatar from 'react-avatar'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileSchema } from './validations/Profile.validation'



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
            <section>
                <Row>
                    <Col lg={4}>
                        <Card className="shadow">
                            <Avatar size="100%" src={`/upload/${user.img}`} name={user.fullName()} className="card-img-top rounded-top"/>
                            <Card.Body>
                                <span className="h6 icon-tertiary small">
                                    <span className="fas fa-medal me-2">
                                        Edad: 30 años
                                    </span>
                                </span>
                                <h3 className="h5 card-title mt-3">
                                    {user.fullName()}
                                </h3>
                                <p className="card-text">
                                    <span className="d-block">{user.email()}</span>
                                    <span className="d-block">{user.phone}</span>
                                    <span className="d-block">DNI {user.identity}</span>
                                </p>
                                
                            </Card.Body>
                        
                        </Card>
                    </Col>
                    <Col lg={8}> 
                        <Card className="">
                            <Card.Body>
                                <Form onSubmit={handleSubmit(profileSubmit)}>

                                    <Row>
                                        
                                        {/* firstName */}
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Nombre</Form.Label>
                                                    <Form.Control 
                                                        {...register("firstName")}
                                                        className={isValid(errors.firstName)}
                                                        defaultValue={user.firstName}
                                                        type="text" 
                                                        size="md" 
                                                        placeholder="Nombre"/>
                                                <p className="text-danger small">
                                                    { errors?.firstName?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                        
                                        {/* lastName */}
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Apellido</Form.Label>
                                                <Form.Control 
                                                    {...register("lastName")}
                                                    className={isValid(errors.lastName)}
                                                    defaultValue={user.lastName}
                                                    type="text" 
                                                    size="md" />
                                                <p className="text-danger small">
                                                    { errors?.lastName?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        {/* Age */}
                                        <Col>
                                            <Form.Group>
                                                <Form.Label><FiCalendar /> Fecha de Nacimiento</Form.Label>
                                                <Form.Control 
                                                    {...register("age")} 
                                                    defaultValue={user.age}
                                                    size="md"
                                                    type="date" />
                                                <p className="text-danger small">
                                                    { errors?.age?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>

                                        {/* identity */}
                                        <Col>
                                            <Form.Group>
                                                <Form.Label><FiInfo /> Documento (DNI)</Form.Label>
                                                <Form.Control 
                                                    {...register("identity")} 
                                                    defaultValue={user.identity}
                                                    size="md"
                                                    type="text" />
                                                <p className="text-danger small">
                                                    { errors?.identity?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        {/* email */}
                                        <Col md={8}>
                                            <Form.Group className="mb-3">
                                                <Form.Label><FiMail /> Email</Form.Label>
                                                <Form.Control
                                                    {...register('email')}
                                                    className={isValid(errors.email)}
                                                    defaultValue={user.email()}
                                                    type="email" 
                                                    size="md" />
                                                <p className="text-danger small">
                                                    { errors?.email?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>

                                        {/* phone */}
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label><FiPhone /> Teléfono</Form.Label>
                                                <Form.Control
                                                    {...register('phone')}
                                                    className={isValid(errors.phone)}
                                                    defaultValue={user.phone}
                                                    type="text" 
                                                    size="md" />
                                                <p className="text-danger small">
                                                    { errors?.phone?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {/* email */}


                                    <Row>
                                        
                                        {/* password */}
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label><FiLock /> Nueva Contraseña</Form.Label>
                                                
                                                <Form.Control 
                                                    {...register("password")} 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    size="md"
                                                    className={isValid(errors.password)} />
                                                
                                                <p className="text-danger small">
                                                    { errors?.password?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>

                                        {/* confirm password */}
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                                                
                                                <Form.Control 
                                                        {...register("confirmPassword")} 
                                                        type="password" 
                                                        placeholder="Password"
                                                        size="md"
                                                        className={isValid(errors.confirmPassword)} />
                                                
                                                <p className="text-danger small">
                                                    { errors?.confirmPassword?.message }
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
                                                        className={isValid(errors.avatar)} />
                                                
                                                <p className="text-danger small">
                                                    { errors?.avatar?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="d-grid gap-2">
                                    <Button variant="outline-primary" type="submit" size="md" className="my-4"><FiSave /> Actualizar Información</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Profile