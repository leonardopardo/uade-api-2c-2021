import React from 'react'
import { Container, Button, Modal } from 'react-bootstrap'

const CalendarButton = ({color}) => {
    const state = {
        isOpen: false
    };

    const openModal = () => this.state.isOpen = true;
    const closeModal = () => this.state.isOpen = false;

    return(
        <>
            <Container>
                <Button onClick={openModal} style={{width: "100", height: "100%", backgroundColor: color}}></Button>
            
            <Modal show={state.isOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
            </Container>
            
        </>
    )
}

export default CalendarButton