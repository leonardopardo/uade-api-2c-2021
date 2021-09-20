import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FiFacebook, FiInfo, FiInstagram, FiTwitter, FiHome, FiMessageCircle } from 'react-icons/fi'

const FooterLayout = () => {
    return (
        <>
            <footer className="footer pt-6 pb-5 bg-dark text-white">
                <Container>
                    <Row>
                        <div className="col-md-4">
                            <h5 className="broder border-bottom border-primary pb-2">Padres al Día</h5>
                            <p>
                                Es un sitio con información relevante sobre los 
                                controles pediátricos de los niños en su primer etapa y cuenta con una herramienta
                                que permite a los padres hacer un seguimiento de dichos controles.
                            </p>
                            <ul className="social-buttons mb-5 mb-lg-0">
                                <li><Link to="#"><FiTwitter size={30} /></Link></li>
                                <li><Link to="#"><FiFacebook size={30} /></Link></li>
                                <li><Link to="#"><FiInstagram size={30} /></Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-5 mb-lg-0">
                            <h5 className="broder border-bottom border-primary pb-2">Sitio</h5>
                            <ul className="footer-links mt-2">
                                <li><Link to="/"><FiHome /> Home</Link></li>
                                <li><Link to="/About"><FiInfo /> Nosoros</Link></li>
                                <li><Link to="/Contact"><FiMessageCircle /> Contacto</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-5 mb-lg-0">
                            <h5 className="broder border-bottom border-primary pb-2">Links</h5>
                            <ul className="footer-links mt-2">
                                <li><Link to="#">Información</Link></li>
                                <li><Link to="#">Políticas</Link></li>
                                <li><Link to="#">Licencia</Link></li>
                                <li><Link to="#">Soporte</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 mb-5 mb-lg-0">
                            <h5 className="broder border-bottom border-primary pb-2">Suscribase</h5>
                            <p className="text-muted font-small mt-2">
                                Suscribase si desea recibir información de interés.
                            </p>
                            <Form>
                                <Row className="form-row mb-2">
                                    <Col md={12} >
                                        <label className="h6 fw-normal text-muted d-none">Dejanos tu Email</label> 
                                        <input 
                                            type="email" 
                                            className="form-control mb-2"
                                            placeholder="example@company.com" 
                                            name="email" 
                                            aria-label="Subscribe form"
                                            id="exampleInputEmail3" 
                                            required="" />
                                    </Col>
                                    <Col md={12} className="d-grid">
                                        <button type="submit" className="btn btn-tertiary"data-loading-text="Sending">
                                            <span>Suscribirse</span>
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                            <p className="text-muted font-small m-0">Núnca compartiremos tu email. Mirá nuestras <br />
                                <Link className="text-white" to="#">Políticas de Privacidad</Link>
                            </p>
                        </div>
                    </Row>
                    <hr className="bg-secondary my-3 my-lg-5" />
                    <Row>
                        <Col className="mb-md-0">
                            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                                <p className="fw-normal font-small mb-0">
                                    Copyright © UADE - Aplicaciones Interactivas <span className="current-year">2021</span>.  <br />
                                    Manuel Anderson - Leonardo Pardo
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterLayout