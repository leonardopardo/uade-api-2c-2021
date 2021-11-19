import React, {useState, useEffect} from 'react'
import { Row, Table, Container} from 'react-bootstrap'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import CalendarButton from './Calendar.button'

const Calendar = ({children}) => {

    const [
        childrenState
    ] = useState(children);

    // For loading children names
    const [
        availableChildrenState,
        setAvailableChildrenState
    ] = useState([]);

    const getChildrenNames = async () => {
        let children_names = []
        childrenState.forEach((child) => {
            children_names.push({'value': child['identity'], 'label': child['firstName'], 'obj': child})
        })
        setAvailableChildrenState(children_names)
    }

    useEffect(() => {
        const children_names = async () => await getChildrenNames()
        setAvailableChildrenState(children_names)
    }, [])

    // For loading the vaccine data
    const [
        childrenControlsState,
        setChildrenControlsState
    ] = useState({});

    const [
        childrenControlsLoadingState,
        setChildrenControlsLoadingState
    ] = useState(true);

    const handleChildSelect = async (child) => {
        console.log(child)
        //let child_percentiles = await ControlService.getPercentiles(child)
        //setChildrenControlsState(child_percentiles)
        //setChildrenControlsLoadingState(false)
    }

    const animatedComponents = makeAnimated();

    return(
        <>
            <Container className="justify-content-center">
                <Row className="my-4">
                <Select
                    defaultValue="null"
                    onChange={handleChildSelect}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    options={availableChildrenState} />
                </Row>
                <Table bordered responsive className="m-auto table-sm">
                    <tbody>
                        <tr>
                            <th></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>BCG</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>HEPATITIS B</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>PENTAVALENTE</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>ROTAVIRUS</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}><span>PENTAVALENTE</span><span className="d-block">CUÁDRUPLE O</span></p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>SALK</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}><span>CONJUGADA</span><span className="d-block">NEUMOCOCO</span></p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>GRIPE</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>MENINGOCOCO</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>TRIPLE VIRAL</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>HEPATITIS A</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>VARICELA</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}><span>CELULAR</span><span className="d-block">TRIPLE BACTERIANA</span></p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>HPV</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>DOBLE BACTERIANA</p></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>RECIÉN NACIDO</th>
                            {/*BCG*/}
                            <th><CalendarButton color="darkblue" nombreVacuna="BCG"/></th>
                            {/*HEPATITIS B*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="HEPATITIS B"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>2 MESES</th>
                            <th></th>
                            <th></th>
                            {/*PENTAVALENTE*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="PENTAVALENTE"/></th>
                            {/*ROTAVIRUS*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="ROTAVIRUS"/></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="SALK"/></th>
                            {/*NEUMOCOCO CONJUGADA*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="NEUMOCOCO CONJUGADA"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>3 MESES</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*MENINGOCOCO*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="MENINGOCOCO"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>4 MESES</th>
                            <th></th>
                            <th></th>
                            {/*PENTAVALENTE*/}
                            <th><CalendarButton color="hotpink" nombreVacuna="PENTAVALENTE"/></th>
                            {/*ROTAVIRUS*/}
                            <th><CalendarButton color="hotpink" nombreVacuna="ROTAVIRUS"/></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color="hotpink" nombreVacuna="SALK"/></th>
                            {/*NEUMOCOCO CONJUGADA*/}
                            <th><CalendarButton color="hotpink" nombreVacuna="NEUMOCOCO CONJUGADA"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>5 MESES</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*MENINGOCOCO*/}
                            <th><CalendarButton color="hotpink" nombreVacuna="MENINGOCOCO"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>6 MESES</th>
                            <th></th>
                            <th></th>
                            {/*PENTAVALENTE*/}
                            <th><CalendarButton color='limegreen' nombreVacuna="PENTAVALENTE"/></th>
                            <th></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color='limegreen' nombreVacuna="SALK"/></th>
                            <th></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink" nombreVacuna="GRIPE"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>12 MESES</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*NEUMOCOCO CONJUGADA*/}
                            <th><CalendarButton color="cornflowerblue" nombreVacuna="NEUMOCOCO CONJUGADA"/></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink" nombreVacuna="GRIPE"/></th>
                            <th></th>
                            {/*TRIPLE VIRAL*/}
                            <th><CalendarButton color="deepskyblue" nombreVacuna="TRIPLE VIRAL"/></th>
                            {/*HEPATITIS A*/}
                            <th><CalendarButton color="darkblue" nombreVacuna="HEPATITIS A"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>15 MESES</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink"  nombreVacuna="GRIPE"/></th>
                            {/*MENINGOCOCO*/}
                            <th><CalendarButton color="cornflowerblue"  nombreVacuna="MENINGOCOCO"/></th>
                            <th></th>
                            <th></th>
                            {/*VARICELA*/}
                            <th><CalendarButton color="darkblue"  nombreVacuna="VARICELA"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>15-18 MESES</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*CUÁDRUPLE O PENTAVALENTE*/}
                            <th><CalendarButton color="cornflowerblue" nombreVacuna="CUADRUPLE O PENTAVALENTE"/></th>
                            <th></th>
                            <th></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink" nombreVacuna="GRIPE"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>24 MESES</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink" nombreVacuna="GRIPE"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>5-6 AÑOS</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color="cornflowerblue" nombreVacuna="SALK"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*TRIPLE VIRAL*/}
                            <th><CalendarButton color="hotpink" nombreVacuna="TRIPLE VIRAL"/></th>
                            <th></th>
                            <th></th>
                            {/*TRIPLE BACTERIANA CELULAR*/}
                            <th><CalendarButton color="cornflowerblue" nombreVacuna="TRIPLE BACTERIANA CELULAR"/></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>11 AÑOS</th>
                            <th></th>
                            {/*HEPATITIS B*/}
                            <th><CalendarButton color="mediumorchid" nombreVacuna="HEPATITIS B"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*MENINGOCOCO*/}
                            <th><CalendarButton color="cornflowerblue" nombreVacuna="MENINGOCOCO"/></th>
                            {/*TRIPLE VIRAL*/}
                            <th><CalendarButton color="mediumorchid" nombreVacuna="TRIPLE VIRAL"/></th>
                            <th></th>
                            <th></th>
                            {/*TRIPLE BACTERIANA CELULAR*/}
                            <th><CalendarButton color="cornflowerblue" nombreVacuna="TRIPLE BACTERIANA CELULAR"/></th>
                            {/*HPV*/}
                            <th><CalendarButton color="mediumorchid" nombreVacuna="HPV"/></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Calendar