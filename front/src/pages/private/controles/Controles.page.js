import React, {useState, useEffect} from 'react'
import { Col, Row, Table, Form, Pagination } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi';

import ModalControlAdd from './modals/Modal.add';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'


const Controls = ({children}) => {

    const [
        childrenState
    ] = useState(children);

    const [
        availableChildrenState,
        setAvailableChildrenState
    ] = useState([]);

    const getChildrenNames = async () => {
        let children_names = []
        childrenState.forEach((child) => {
            children_names.push({'value': child['identity'], 'label': child['firstName']})
        })
        setAvailableChildrenState(children_names)
    }

    useEffect(() => {
        const children_names = async () => await getChildrenNames()
        setAvailableChildrenState(children_names)
    }, [])

    //Comment
    const controls = [
        {
            fecha: "24/09/21",
            peso: "14kg",
            altura: "89cm",
            diametro: "40cm",
            medicamento: true
        },
        {
            fecha: "23/08/21",
            peso: "13kg",
            altura: "85cm",
            diametro: "40cm",
            medicamento: false
        },
        {
            fecha: "22/07/21",
            peso: "12kg",
            altura: "80cm",
            diametro: "40cm",
            medicamento: true
        }
    ];

    const getCheckbox = (checked) => {
        if (checked){
            return <Form.Check disabled type="checkbox" checked/>
        }
        return <Form.Check disabled type="checkbox"/>
    }

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
                            {getCheckbox(element.medicamento)}
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

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div>
            <Pagination size="sm">{items}</Pagination>
        </div>
    );
    
    return(
        <>
            <section>
                    <Row className="my-2">
                        <Col>
                            <ModalControlAdd children={availableChildrenState} />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={availableChildrenState} />
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
                    {paginationBasic}
            </section>
        </>
    )
}

export default Controls