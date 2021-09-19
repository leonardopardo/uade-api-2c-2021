import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FiCheck, FiCheckSquare } from 'react-icons/fi';


const Content = () => {
    return(
        <>
            <section className="section bg-gray-200">
                <Container>
                    <Row>
                        <Col md={6} lg={4}>
                            <h1 className="text-lg-end text-uppercase">La importancia del control pediátrico</h1>
                        </Col>
                        <Col md={6} lg={8}>
                            <h3>
                                El control periódico del niño es fundamental para el crecimiento y desarrollo en salud, 
                                al igual que para detectar patologías y el seguimiento de las enfermedades crónicas.
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section">
                <Container className="mb-4">
                    <Row>
                        <Col xs={12} className="mb-4">
                            <h1 className="fw-bold">Control del niño sano <FiCheck /></h1>
                            <hr />
                            <h2>
                                Qué esperar durante los controles de rutina
                            </h2>
                            <p className="text-justify">
                                Un control del bebé sano es una oportunidad para revisar la salud y el 
                                crecimiento del bebé con el médico y así poder analizar cualquier 
                                inquietud. Esto es lo que necesitas saber y cómo prepararte.
                            </p>
                            <p className="text-justify">
                                Las consultas pediátricas de control son una forma importante de controlar 
                                el crecimiento y el desarrollo de tu bebé y de detectar problemas graves. 
                                Estos chequeos regulares también ofrecen la oportunidad de desarrollar una 
                                relación con el médico de tu bebé. 
                            </p>
                            <p className="text-justify">
                                Es probable que el médico de tu bebé recomiende la primera consulta 
                                pediátrica de rutina dentro de los tres a cinco días posteriores al 
                                nacimiento. Se necesitarán consultas pediátricas adicionales de rutina 
                                cada pocas semanas y, más adelante, cada pocos meses durante el primer 
                                año. En algunos casos, el médico puede querer hacer chequeos más 
                                frecuentes. A continuación, te presentamos lo que se controlará 
                                durante estos exámenes.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>Calendario de Vacunas <FiCheck /></h1>
                            <hr />
                            <p>Información sobre el Calendario anual de Vacunación 2021</p>
                            <img src="/images/calendario_vacunas.jpg" alt="Calendario de Vacunas" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row>
                        <Col>
                            <h1>Cuando realizar los controles <FiCheck /></h1>
                            <hr />
                            <p>
                                La periodicidad de los controles se hace en base a cada niño y su condición de salud. 
                                Hay, sin embargo, distintos esquemas de seguimiento estipulados.
                                El más usado es:
                            </p>
                            <ul className="list-unstyled">
                                <li><FiCheckSquare /> A las 48 hs de vida (esto se hace en la internación conjunta de la madre y el niño).</li>
                                <li><FiCheckSquare /> Dentro de los primeros 10 días.</li>
                                <li><FiCheckSquare /> Al mes de vida.</li>
                                <li><FiCheckSquare /> Luego 1 vez por mes del segundo mes al año de vida.</li>
                                <li><FiCheckSquare /> Luego cada 2 meses a los 14, 16 y 18 meses.</li>
                                <li><FiCheckSquare /> Luego cada 3 meses a los 21 y 24 meses.</li>
                                <li><FiCheckSquare /> Cada 6 meses a los 30 y 36 meses.</li>
                                <li><FiCheckSquare /> Luego de los 3 años 1 vez por año.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>    
        </>
    )
}

export default Content