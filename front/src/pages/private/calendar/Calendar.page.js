import React from 'react'
import { Row, Table, Container} from 'react-bootstrap'

import CalendarButton from './Calendar.button'

// <th><p style={{transform: "rotate(270deg)", alignContent: "center"}}>TRIPLE BACTERIANA CELULAR</p></th>


const Calendar = () => {

    return(
        <>
            <Container className="justify-content-center">
                <Table bordered>
                    <tbody>
                        <tr>
                            <th></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>BCG</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>HEPATITIS B</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>PENTAVALENTE</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>ROTAVIRUS</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>CUÁDRUPLE O PENTAVALENTE</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>SALK</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>NEUMOCOCO CONJUGADA</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>GRIPE</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>MENINGOCOCO</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>TRIPLE VIRAL</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>HEPATITIS A</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>VARICELA</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>TRIPLE BACTERIANA CELULAR</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>HPV</p></th>
                            <th><p style={{writingMode: "vertical-lr", fontSize: "12px"}}>DOBLE BACTERIANA</p></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>RECIÉN NACIDO</th>
                            {/*BCG*/}
                            <th><CalendarButton color="darkblue"/></th>
                            {/*HEPATITIS B*/}
                            <th><CalendarButton color="deepskyblue"/></th>
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
                            <th><CalendarButton color="deepskyblue"/></th>
                            {/*ROTAVIRUS*/}
                            <th><CalendarButton color="deepskyblue"/></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color="deepskyblue"/></th>
                            {/*NEUMOCOCO CONJUGADA*/}
                            <th><CalendarButton color="deepskyblue"/></th>
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
                            <th><CalendarButton color="deepskyblue"/></th>
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
                            <th><CalendarButton color="hotpink"/></th>
                            {/*ROTAVIRUS*/}
                            <th><CalendarButton color="hotpink"/></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color="hotpink"/></th>
                            {/*NEUMOCOCO CONJUGADA*/}
                            <th><CalendarButton color="hotpink"/></th>
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
                            <th><CalendarButton color="hotpink"/></th>
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
                            <th><CalendarButton color='limegreen'/></th>
                            <th></th>
                            <th></th>
                            {/*SALK*/}
                            <th><CalendarButton color='limegreen'/></th>
                            <th></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink"/></th>
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
                            <th><CalendarButton color="cornflowerblue"/></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink"/></th>
                            <th></th>
                            {/*TRIPLE VIRAL*/}
                            <th><CalendarButton color="deepskyblue"/></th>
                            {/*HEPATITIS A*/}
                            <th><CalendarButton color="darkblue"/></th>
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
                            <th><CalendarButton color="pink"/></th>
                            {/*MENINGOCOCO*/}
                            <th><CalendarButton color="cornflowerblue"/></th>
                            <th></th>
                            <th></th>
                            {/*VARICELA*/}
                            <th><CalendarButton color="darkblue"/></th>
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
                            <th><CalendarButton color="cornflowerblue"/></th>
                            <th></th>
                            <th></th>
                            {/*GRIPE*/}
                            <th><CalendarButton color="pink"/></th>
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
                            <th><CalendarButton color="pink"/></th>
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
                            <th><CalendarButton color="cornflowerblue"/></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*TRIPLE VIRAL*/}
                            <th><CalendarButton color="hotpink"/></th>
                            <th></th>
                            <th></th>
                            {/*TRIPLE BACTERIANA CELULAR*/}
                            <th><CalendarButton color="cornflowerblue"/></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th style={{fontSize: "12px"}}>11 AÑOS</th>
                            <th></th>
                            {/*HEPATITIS B*/}
                            <th><CalendarButton /></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            {/*MENINGOCOCO*/}
                            <th><CalendarButton color="cornflowerblue"/></th>
                            {/*TRIPLE VIRAL*/}
                            <th><CalendarButton /></th>
                            <th></th>
                            <th></th>
                            {/*TRIPLE BACTERIANA CELULAR*/}
                            <th><CalendarButton color="cornflowerblue"/></th>
                            {/*HPV*/}
                            <th><CalendarButton /></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Calendar