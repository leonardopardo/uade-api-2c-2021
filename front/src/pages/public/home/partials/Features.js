import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiBarChart2, FiBox, FiCalendar, FiGrid, FiCheckCircle } from 'react-icons/fi'

const Features = () => {
    return(
        <Container className="px-4 py-5" id="icon-grid">
            <h2 className="pb-2 border-bottom">Características</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <Col className="col d-flex align-items-start">
                    <FiBox className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Controles</h4>
                        <p>Haga un seguimiento de los controles pediátricos de sus hijos.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiCalendar className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Agenda</h4>
                        <p>Planifique su agenda y dele un seguimiento a los eventos importantes.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiBarChart2 className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Referencias</h4>
                        <p>Obtenga valores de referencia para verfificar el correcto crecimiento de sus hijos.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiGrid className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Vacunas</h4>
                        <p>Consulte el calendario de vacunas y registre la aplicación de cada una.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiCheckCircle className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Eventos</h4>
                        <p>Registre los eventos importantes de la vida de su hijo.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiCheckCircle className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiCheckCircle className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </Col>
                <Col className="col d-flex align-items-start">
                    <FiCheckCircle className="flex-shrink-0 me-3" size={50} />
                    <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Features