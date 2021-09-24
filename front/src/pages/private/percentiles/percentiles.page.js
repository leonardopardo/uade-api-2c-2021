import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import WeightChart from './graphs/weight.page';
import HeightChart from './graphs/height.page';
import HeadCircumferenceChart from './graphs/headCircumference.page';


const Percentiles = () => {

    const childrens = ["Juana", "Pablo", "Pedro"];
    
    return(
        <>
            <section>
                    <Row className="my-4">
                        {
                            childrens.map((item) => <Col md="1"><Button variant="outline-dark">{item}</Button></Col>)
                        }
                    </Row>
                    <hr></hr>
                    <WeightChart />
                    <hr></hr>
                    <HeightChart />
                    <hr></hr>
                    <HeadCircumferenceChart />
            </section>
        </>
    )
}

export default Percentiles