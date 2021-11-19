import React , { useState } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import ModalChildreAdd from './modals/Modal.add'
import ModalChildrenView from './modals/Modal.view'
import CalcularEdad from './../../../utils/DateHelper';

const Childrens = (props) => {

    const [
        childrenState,
        setChildrenState
    ] = useState(props.children);

    const getChildrens = () => {

        let listChildrens = childrenState.map( (child, index) => {
           
            return(
                <Col key={`child-${index}`} lg={4}>
                    <Card className="shadow">
                        {
                            child.img !== '' 
                            ? <Card.Img variant="top" src={child.img}></Card.Img>
                            : <Card.Img variant="top" src={`/upload/avatar.jpg`}></Card.Img>
                        }
                        <Card.Body>
                            <span className="h6 icon-tertiary small">
                                {
                                    child.age !== '' ?
                                    <span className="fas fa-medal me-2"> { child.age ? `Edad: ${CalcularEdad(child.age)}` : ``} años</span>
                                    :
                                    <span className="fas fa-medal me-2"></span>
                                }
                            </span>
                            <h3 className="h5 card-title mt-3">
                                {child.fullName()}
                            </h3>
                            <p className="card-text">
                                <span className="d-block">{child.bloodType}</span>
                            </p>
                            <ModalChildrenView child={child} />
                        </Card.Body>
                    
                    </Card>
                </Col>
            )
        })

        return childrenState.length === 0
            ? <h4 className="text-center text-muted fw-light">Todavía no agregaste información</h4>
            : listChildrens
    }
    
    return(
        <>
            <section>
                    <Row className="my-2">
                        <Col>
                            <ModalChildreAdd />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        {getChildrens()}
                    </Row>
            </section>
        </>
    )
}

export default Childrens