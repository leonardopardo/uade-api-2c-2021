import React, {useState} from 'react'
import { Col, Row, Table, Card, Button, Form } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi';

import ModalControlAdd from './modals/Modal.add';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'


const Controls = () => {

    const controls = [
        {
            fecha: "24/09/21",
            peso: "14kg",
            altura: "89cm",
            diametro: "40cm"
        },
        {
            fecha: "23/08/21",
            peso: "13kg",
            altura: "85cm",
            diametro: "40cm"
        },
        {
            fecha: "22/07/21",
            peso: "12kg",
            altura: "80cm",
            diametro: "40cm"
        }
    ];

    const childrens = [
        {value: '1', label:'Nicolás'}
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const animatedComponents = makeAnimated();


    const getControls = () => {

        let listControls = controls.map( element => {
            return( 
                <tr>
                    <th> {element.fecha} </th>
                    <th> {element.peso} </th>
                    <th> {element.altura} </th>
                    <th> {element.diametro} </th>
                    <th> <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check disabled type="checkbox"/>
                        </Form.Group>     
                    </th>
                    <th> <FiEye/> </th>
                </tr>
            )
        })

        return controls.length === 0
            ? <h4 className="text-center text-muted fw-light">Todavía no agregaste información</h4>
            : listControls
    }
    
    return(
        <>
            <section>
                    <Row className="my-2">
                        <Col>
                            <ModalControlAdd children={childrens} />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={childrens} />
                    </Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Peso</th>
                                <th>Altura</th>
                                <th>Diámetro Craneal</th>
                                <th>Medicamentos</th>
                                <th>Más Información</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getControls()}
                        </tbody>
                    </Table>
            </section>
        </>
    )
}

export default Controls