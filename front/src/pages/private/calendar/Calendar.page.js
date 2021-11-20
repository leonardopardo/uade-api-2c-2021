import React, {useState, useEffect} from 'react'
import { Row, Table, Container} from 'react-bootstrap'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import CalendarButton from './Calendar.button'

import VaccineService from '../../../services/VaccineService'

const Calendar = (props) => {

    const [
        childrenState
    ] = useState(props.children);

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

    // For loading the vaccine data
    const [
        childrenVaccinesState,
        setChildrenVaccinesState
    ] = useState();

    const [
        childrenVaccinesLoadingState,
        setChildrenVaccinesLoadingState
    ] = useState(true);

    const handleChildSelect = async (child) => {
        let childVaccines = await VaccineService.getVaccines(child)
        setChildrenVaccinesState(childVaccines)
        setChildrenVaccinesLoadingState(false)
    }

    const getVaccine = (number) => {
        
        let vaccine = null
        childrenVaccinesState.vaccines.data.forEach(item => {
            if(item.vaccine_id === number)
                vaccine = item
        })

        return vaccine
    }

    useEffect(() => {
        const children_names = async () => await getChildrenNames()
        setAvailableChildrenState(children_names)
    }, [])

    const animatedComponents = makeAnimated();

    return(
        <>
            <Container className="justify-content-center">
                <Row className="my-4">
                <label>Seleccione Hija/o</label>
                <Select
                    defaultValue="null"
                    onChange={handleChildSelect}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={availableChildrenState} />
                </Row>
                {
                    !childrenVaccinesLoadingState &&
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
                                <th><CalendarButton vaccine_id="1" vaccine={getVaccine(1)} info={childrenVaccinesState} color="darkblue" nombreVacuna="BCG"/></th>
                                {/*HEPATITIS B*/}
                                <th><CalendarButton vaccine_id="2" vaccine={getVaccine(2)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="HEPATITIS B"/></th>
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
                                <th><CalendarButton vaccine_id="3" vaccine={getVaccine(3)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="PENTAVALENTE"/></th>
                                {/*ROTAVIRUS*/}
                                <th><CalendarButton vaccine_id="4" vaccine={getVaccine(4)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="ROTAVIRUS"/></th>
                                <th></th>
                                {/*SALK*/}
                                <th><CalendarButton vaccine_id="5" vaccine={getVaccine(5)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="SALK"/></th>
                                {/*NEUMOCOCO CONJUGADA*/}
                                <th><CalendarButton vaccine_id="6" vaccine={getVaccine(6)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="NEUMOCOCO CONJUGADA"/></th>
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
                                <th><CalendarButton vaccine_id="7" vaccine={getVaccine(7)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="MENINGOCOCO"/></th>
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
                                <th><CalendarButton vaccine_id="8" vaccine={getVaccine(8)} info={childrenVaccinesState} color="hotpink" nombreVacuna="PENTAVALENTE"/></th>
                                {/*ROTAVIRUS*/}
                                <th><CalendarButton vaccine_id="9" vaccine={getVaccine(9)} info={childrenVaccinesState} color="hotpink" nombreVacuna="ROTAVIRUS"/></th>
                                <th></th>
                                {/*SALK*/}
                                <th><CalendarButton vaccine_id="10" vaccine={getVaccine(10)} info={childrenVaccinesState} color="hotpink" nombreVacuna="SALK"/></th>
                                {/*NEUMOCOCO CONJUGADA*/}
                                <th><CalendarButton vaccine_id="11" vaccine={getVaccine(11)} info={childrenVaccinesState} color="hotpink" nombreVacuna="NEUMOCOCO CONJUGADA"/></th>
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
                                <th><CalendarButton vaccine_id="12" vaccine={getVaccine(12)} info={childrenVaccinesState} color="hotpink" nombreVacuna="MENINGOCOCO"/></th>
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
                                <th><CalendarButton vaccine_id="13" vaccine={getVaccine(13)} info={childrenVaccinesState} color='limegreen' nombreVacuna="PENTAVALENTE"/></th>
                                <th></th>
                                <th></th>
                                {/*SALK*/}
                                <th><CalendarButton vaccine_id="14" vaccine={getVaccine(14)} info={childrenVaccinesState} color='limegreen' nombreVacuna="SALK"/></th>
                                <th></th>
                                {/*GRIPE*/}
                                <th><CalendarButton vaccine_id="15" vaccine={getVaccine(15)} info={childrenVaccinesState} color="pink" nombreVacuna="GRIPE"/></th>
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
                                <th><CalendarButton vaccine_id="16" vaccine={getVaccine(16)} info={childrenVaccinesState} color="cornflowerblue" nombreVacuna="NEUMOCOCO CONJUGADA"/></th>
                                {/*GRIPE*/}
                                <th><CalendarButton vaccine_id="17" vaccine={getVaccine(17)} info={childrenVaccinesState} color="pink" nombreVacuna="GRIPE"/></th>
                                <th></th>
                                {/*TRIPLE VIRAL*/}
                                <th><CalendarButton vaccine_id="18" vaccine={getVaccine(18)} info={childrenVaccinesState} color="deepskyblue" nombreVacuna="TRIPLE VIRAL"/></th>
                                {/*HEPATITIS A*/}
                                <th><CalendarButton vaccine_id="19" vaccine={getVaccine(19)} info={childrenVaccinesState} color="darkblue" nombreVacuna="HEPATITIS A"/></th>
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
                                <th><CalendarButton vaccine_id="20" vaccine={getVaccine(20)} info={childrenVaccinesState} color="pink"  nombreVacuna="GRIPE"/></th>
                                {/*MENINGOCOCO*/}
                                <th><CalendarButton vaccine_id="21" vaccine={getVaccine(21)} info={childrenVaccinesState} color="cornflowerblue"  nombreVacuna="MENINGOCOCO"/></th>
                                <th></th>
                                <th></th>
                                {/*VARICELA*/}
                                <th><CalendarButton vaccine_id="22" vaccine={getVaccine(22)} info={childrenVaccinesState} color="darkblue"  nombreVacuna="VARICELA"/></th>
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
                                <th><CalendarButton vaccine_id="23" vaccine={getVaccine(23)} info={childrenVaccinesState} color="cornflowerblue" nombreVacuna="CUADRUPLE O PENTAVALENTE"/></th>
                                <th></th>
                                <th></th>
                                {/*GRIPE*/}
                                <th><CalendarButton vaccine_id="24" vaccine={getVaccine(24)} info={childrenVaccinesState} color="pink" nombreVacuna="GRIPE"/></th>
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
                                <th><CalendarButton vaccine_id="25" vaccine={getVaccine(25)} info={childrenVaccinesState} color="pink" nombreVacuna="GRIPE"/></th>
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
                                <th><CalendarButton vaccine_id="26" vaccine={getVaccine(26)} info={childrenVaccinesState} color="cornflowerblue" nombreVacuna="SALK"/></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                {/*TRIPLE VIRAL*/}
                                <th><CalendarButton vaccine_id="27" vaccine={getVaccine(27)} info={childrenVaccinesState} color="hotpink" nombreVacuna="TRIPLE VIRAL"/></th>
                                <th></th>
                                <th></th>
                                {/*TRIPLE BACTERIANA CELULAR*/}
                                <th><CalendarButton vaccine_id="28" vaccine={getVaccine(28)} info={childrenVaccinesState} color="cornflowerblue" nombreVacuna="TRIPLE BACTERIANA CELULAR"/></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th style={{fontSize: "12px"}}>11 AÑOS</th>
                                <th></th>
                                {/*HEPATITIS B*/}
                                <th><CalendarButton vaccine_id="29" vaccine={getVaccine(29)} info={childrenVaccinesState} color="mediumorchid" nombreVacuna="HEPATITIS B"/></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                {/*MENINGOCOCO*/}
                                <th><CalendarButton vaccine_id="30" vaccine={getVaccine(30)} info={childrenVaccinesState} color="cornflowerblue" nombreVacuna="MENINGOCOCO"/></th>
                                {/*TRIPLE VIRAL*/}
                                <th><CalendarButton vaccine_id="31" vaccine={getVaccine(31)} info={childrenVaccinesState} color="mediumorchid" nombreVacuna="TRIPLE VIRAL"/></th>
                                <th></th>
                                <th></th>
                                {/*TRIPLE BACTERIANA CELULAR*/}
                                <th><CalendarButton vaccine_id="32" vaccine={getVaccine(32)} info={childrenVaccinesState} color="cornflowerblue" nombreVacuna="TRIPLE BACTERIANA CELULAR"/></th>
                                {/*HPV*/}
                                <th><CalendarButton vaccine_id="33" vaccine={getVaccine(33)} info={childrenVaccinesState} color="mediumorchid" nombreVacuna="HPV"/></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </Table>
                }
            </Container>
        </>
    )
}

export default Calendar