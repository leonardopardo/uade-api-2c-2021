import React from 'react';
import { Card, Button } from 'react-bootstrap'

export default function PostComponent(props) {
    return(
        <>
            <Card className="mb-4">
                <Card.Img variant="top" src={ props.path } />
                <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                    <Card.Text>
                        { props.text }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}