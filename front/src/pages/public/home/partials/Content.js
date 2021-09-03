import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default function Content(){
    return(
        <>
            <Container className="mb-4">
                <Row>
                    <Col xs={8} className="mb-4">
                        <h1>
                            <strong>Control del niño sano</strong>
                        </h1>
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
        </>
    )
}