import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'; 
import PostComponent from '../../../../componentes/PostComponent';
import faker from 'faker';


export default function LastPosts() {

    let posts = [
        {
            title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: `${faker.image.avatar()}`, 
            link:""
        },
        {
            title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img: `${faker.image.avatar()}`, 
            link:""
        },
        {
            title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
            img:  `${faker.image.avatar()}`, 
            link:""
        }
    ];

    let postList = posts.map( post => {
        return (
            <Col>
                <PostComponent title={ post.title } text={ post.text } path={ post.img } />
            </Col>
        )
    })
    
    return(
        <>
            <Container className="w-100 mb-4">
                <Row>
                    {postList}
                </Row>
            </Container>
        </>
    )
}