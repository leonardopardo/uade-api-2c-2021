import React, {useState, useEffect} from 'react'
import { Col, Row, Table, Form, Pagination } from 'react-bootstrap'

import ModalControlAdd from './modals/Modal.add';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import ControlService from '../../../services/ControlService';
import ModalControlView from './modals/Moda.view';


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

    const [
        childrenControlsState,
        setChildrenControlsState
    ] = useState([]);

    const [
        childrenControlsLoadingState,
        setChildrenControlsLoadingState
    ] = useState(true);

    const handleChildSelect = async (child) => {
        let child_controls = await ControlService.getControls(child)
        setChildrenControlsState(child_controls)
        setChildrenControlsLoadingState(false)
    }

    useEffect(() => {
        const children_names = async () => await getChildrenNames()
        setAvailableChildrenState(children_names)
    }, [])

    const getCheckbox = (checked) => {
        if (checked){
            return <Form.Check disabled type="checkbox" checked/>
        }
        return <Form.Check disabled type="checkbox"/>
    }

    const animatedComponents = makeAnimated();
    //
    const getControls = () => {

        let listControls = childrenControlsState.map( (element, index) => {
            return( 
                <tr key={`control-${index}`}>
                    <th> {element.date} </th>
                    <th> {element.weight} </th>
                    <th> {element.height} </th>
                    <th> {element.head_diam} </th>
                    <th> <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {getCheckbox(element.meds)}
                        </Form.Group>     
                    </th>
                    <th> <ModalControlView control={element}/> </th>
                </tr>
            )
        })

        return childrenControlsState.length === 0
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
                        defaultValue="null"
                        onChange={handleChildSelect}
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        options={availableChildrenState} />
                    </Row>
                    {
                        !childrenControlsLoadingState &&
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
                    }
            </section>
        </>
    )
}

export default Controls