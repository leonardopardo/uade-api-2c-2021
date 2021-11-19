import React, { useEffect, useState } from 'react'

import { Col, Row, Form, Button, Card } from 'react-bootstrap'
import { FiCheck, FiMail, FiLock, FiCalendar, FiPhone, FiSave, FiInfo, FiImage } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileSchema } from './validations/Profile.validation'

import UserService from '../../../services/UserService'
import ButtonSpinner from './../../../components/ButtonSpinner';
import { ConfirmPasswordSchema } from './../../public/users/validations/ConfirmPassword.validation';
import CalcularEdad from './../../../utils/DateHelper';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AvatarSchema } from './validations/Avatar.validation';

const Profile = (props) => {

    const [user, setUser] = useState(props.user)

    const [
        loadingFormProfile,
        setLoadingFormProfile
    ] = useState(false);

    const [
        loadingFormPass,
        setLoadingFormPass
    ] = useState(false);

    const [
        loadingFormAvatar,
        setLoadingFormAvatar
    ] = useState(false);

    const [
        selectedFile, 
        setSelectedFile
    ] = useState();

    const {
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(ProfileSchema)
    })

    const {
        register: registerPass, 
        handleSubmit: handleSubmitPass, 
        formState: { errors: errorsPass },
        reset: passwordReset
    } = useForm({
        resolver: yupResolver(ConfirmPasswordSchema)
    })

    const {
        register: registerAvatar, 
        handleSubmit: handleSubmitAvatar, 
        formState: { errors: errorsAvatar },
        reset: avatarReset
    } = useForm({
        resolver: yupResolver(AvatarSchema)
    })

    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }
  
    const profileSubmit = async (data) => {
        
        setLoadingFormProfile(true)
    
        try { 
            const res = await UserService.updateUser(data);
            setUser(res.user)
            toast.success(res.data.message)
        } catch (err) {
            toast.error(err)
            reset()
        } finally {
            setLoadingFormProfile(false)
        }
    }

    const passwordSubmit = async (data) => {
        
        setLoadingFormPass(true)
        
        try {
            const res = await UserService.changePassword(data);
            toast.success(res.message)
        } catch (err) {
            toast.error(err.response.data.error)
        } finally {
            setLoadingFormPass(false)
            passwordReset()
        }
    }

    const avatarSubmit = async (data) => {
        
        setLoadingFormAvatar(true)
        try{
            const {user, res} = await UserService.uploadImage(selectedFile, data['email'])
            setUser(user)
            toast.success(res.message)
        }catch(err){
            toast.error(err)
        }finally{
            setLoadingFormAvatar(false)
            avatarReset()
        }
    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    useEffect(() => {
    }, []);

    return(
        <>
            {/* TOAST */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover /><ToastContainer />

            <section>
                <Row>
                    <Col lg={4}>
                        <Card className="shadow">
                                {
                                    user.img !== '' ?
                                    <Card.Img variant="top" src={user.img}></Card.Img>
                                    :
                                    <Card.Img variant="top" src={`/upload/avatar.jpg`}></Card.Img>
                                }
                            <Card.Body>
                                <span className="h6 icon-tertiary small">
                                    {
                                        user.age !== '' ?
                                        <span className="fas fa-medal me-2"> { user.age ? `Edad: ${CalcularEdad(user.age)}` : ``} años</span>
                                        :
                                        <span className="fas fa-medal me-2"></span>
                                    }
                                </span>
                                <h3 className="h5 card-title mt-3">
                                    { user.fullName }
                                </h3>
                                <p className="card-text">
                                    <span className="d-block"> { user.email }</span>
                                    <span className="d-block"> { user.phone ? `Teléfono: ${user.phone}` : '' }</span>
                                    <span className="d-block"> { user.identity ? `DNI: ${user.identity}` : '' }</span>
                                </p>
                                <Form onSubmit={handleSubmitAvatar(avatarSubmit)}>
                                    {/* hidden value */}
                                    <Form.Control
                                        {...registerAvatar("email")}
                                        type="hidden"
                                        value={user.email}
                                     />
                                    <Row>
                                        <Col md={12}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label><FiImage /> Avatar</Form.Label>
                                                
                                                <Form.Control 
                                                        {...registerAvatar("avatar")} 
                                                        type="file" 
                                                        size="md"
                                                        className={isValid(errorsAvatar.avatar)} onChange={changeHandler} />
                                                <p className="text-danger small">
                                                    { errors?.avatar?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="d-grid gap-2">
                                        {
                                            !loadingFormAvatar 
                                            ? <Button variant="outline-primary" type="submit">Cambiar Imagen</Button>
                                            : <ButtonSpinner />
                                        }
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}> 
                        <Card className="">
                            <Card.Body>
                                {/* Actualizar Perfil */}
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
                                                    defaultValue={user.email}
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
                                    
                                    <div className="d-grid gap-2">
                                        {
                                            !loadingFormProfile
                                            ? <Button variant="outline-primary" type="submit" size="md" className="my-4"><FiSave /> Actualizar Información</Button>
                                            : <ButtonSpinner />
                                        }
                                    </div>
                                </Form>
                                

                                {/* Actualizar Contraseña */}
                                <Form onSubmit={handleSubmitPass(passwordSubmit)}>
                                    {/* hidden value */}
                                    <Form.Control
                                        {...registerPass("email")}
                                        type="hidden"
                                        value={user.email}
                                     />
                                    <Row>
                                        {/* password */}
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label><FiLock /> Nueva Contraseña</Form.Label>
                                                
                                                <Form.Control 
                                                    {...registerPass("password")} 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    size="md"
                                                    className={isValid(errorsPass.password)} />
                                                
                                                <p className="text-danger small">
                                                    { errorsPass?.password?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>

                                        {/* confirm password */}
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label><FiCheck /> Confirmar Contraseña</Form.Label>
                                                
                                                <Form.Control 
                                                        {...registerPass("confirmPassword")} 
                                                        type="password" 
                                                        placeholder="Password"
                                                        size="md"
                                                        className={isValid(errorsPass.confirmPassword)} />
                                                
                                                <p className="text-danger small">
                                                    { errorsPass?.confirmPassword?.message }
                                                </p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    {
                                        !loadingFormPass
                                        ? <Button variant="outline-primary" type="submit" size="md" className="my-4"><FiSave /> Modificar Contraseña</Button>
                                        : <ButtonSpinner />
                                    }
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