import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'; 
import PostComponent from '../../../../componentes/PostComponent';
import faker from 'faker';

const posts = [
    {
        id: 1,
        title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        img: `${faker.image.avatar()}`, 
        link:""
    },
    {
        id:2,
        title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        img: `${faker.image.avatar()}`, 
        link:""
    },
    {
        id:3,
        title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        img:  `${faker.image.avatar()}`, 
        link:""
    },
    {
        id:4,
        title: `${faker.name.lastName()}, ${faker.name.firstName()}`, 
        content: "Some quick example text to build on the card title and make up the bulk of the card's content.", 
        img:  `${faker.image.avatar()}`, 
        link:""
    }
];

const LastPosts = () => {
    
    const postList = posts.map( post => {
        return (
            <Col key={ post.id }>
                <PostComponent title={ post.title } text={ post.text } path={ post.img } />
            </Col>
        )
    })

    return(
        <>
            <Container className="h-100 mb-4">
                <Row>
                    
                </Row>
            </Container>
        </>
    )
}

export default LastPosts