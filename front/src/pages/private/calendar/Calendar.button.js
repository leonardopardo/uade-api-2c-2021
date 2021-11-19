import React, { useState } from 'react'

import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FiCheck, FiMinus } from 'react-icons/fi';
import toast from 'react-hot-toast';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import VaccineService from '../../../services/VaccineService'
import { ApplyVaccineSchema } from './validations/Vaccine.validator'

// Buen link para sacar mas ifo, a futuro https://www.argentina.gob.ar/salud/vacunas

const CalendarButton = ({color, nombreVacuna, vaccine_id, info, applied}) => {
    const isValid = (value) => {
        return value ? 'is-invalid' : ''
    }

    const [completada, setCompletada] = useState(false);

    const marcarCompletada = () => {
        setCompletada(true);
        handleClose();
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const vaccineInfo = [
        {key: "BCG", value: "La vacuna BCG se aplica para proteger de las formas graves de tuberculosis en los niños, por ejemplo: meningitis u osteomielitis."},
        {key: "HEPATITIS B", value: "La vacuna previene la enfermedad de la hepatitis B y las graves consecuencias que esta enfermedad genera como el cáncer de hígado."},
        {key: "PENTAVALENTE", value: "Protege contra Difteria, Tétanos, Tos convulsa, Haemophilus influenzae tipo b y Hepatitis B"},
        {key: "ROTAVIRUS", value: "La vacuna protege contra la diarrea por rotavirus y sus complicaciones, previendo las formas graves de la enfermedad y sus complicaciones."},
        {key: "CUÁDRUPLE O PENTAVALENTE", value: "Protege contra Difteria, Tétanos, Tos convulsa, Haemophilus influenzae tipo b y Hepatitis B"},
        {key: "SALK", value: "La poliomelitis no tiene tratamiento pero se puede prevenir a través de la vacunación. Existen vacunas seguras y eficaces contra la polio. Argentina ha avanzado en el reemplazo de la vacuna OPV o Sabín bivalente por la vacuna IPV o Salk ya que es un paso necesario en el camino hacia la erradicación de la polio."},
        {key: "NEUMOCOCO CONJUGADA", value: "La vacuna protege de infecciones graves causadas por la bacteria neumococo (como neumonía y meningitis) y de sus potenciales complicaciones."},
        {key: "GRIPE", value: "La vacuna reduce las complicaciones, hospitalizaciones, muertes y secuelas ocasionadas por el virus influenza."},
        {key: "MENINGOCOCO", value: "La vacuna antimeningocócica conjugada tetravalente (ACYW) protege contra la enfermedad meningocócica invasiva y sus complicaciones. Las formas más frecuentes de presentación de esta enfermedad: meningitis y sepsis (infección generalizada)."},
        {key: "TRIPLE VIRAL", value: "Protege contra el sarampion, rubéola y paperas"},
        {key: "HEPATITIS A", value: "La vacuna protege contra la enfermedad producida por el virus de la hepatitis A."},
        {key: "VARICELA", value: "Esta vacuna protege contra la varicela, especialmente sus formas graves de presentación y sus complicaciones."},
        {key: "TRIPLE BACTERIANA CELULAR", value: "La vacuna triple bacteriana celular protege contra la difteria, el tétanos y la tos convulsa."},
        {key: "HPV", value: "El objetivo de la vacunación contra el VPH incluye disminuir la incidencia y mortalidad por cáncer de cuello uterino y la carga de enfermedad asociada al VPH, sus complicaciones y mortalidad."},
        {key: "DOBLE BACTERIANA", value: "La vacuna doble bacteriana protege contra la difteria y el tétanos. La vacuna doble adultos es de indicación universal."},
    ]

    //Key will be colors, calendar depends on this
    const calendarInfo = [
        {key: "darkblue", value: "Única Dosis"},
        {key: "deepskyblue", value: "1° Dosis"},
        {key: "hotpink", value: "2° Dosis"},
        {key: "limegreen", value: "3° Dosis"},
        {key: "pink", value: "Dosis Anual"},
        {key: "cornflowerblue", value: "Refuerzo"},
        {key: "mediumorchid", value: "Iniciar o Completar esquemas"}
    ]

    const vaccineInfoView = vaccineInfo.map(item => {
        if(item.key === nombreVacuna) {
            return(
                <p key={ item.key }>{ item.value }</p>
            )
        }
        return ''
    })

    const calendarInfoView = calendarInfo.map( item => { 
        if(item.key === color){
            return ( 
                <p key={ item.key }>{ item.value }</p>
            )
        }
        return ''
    })

    const setIcon = (status) => {
        return status 
            ? <FiCheck className="text-white"/>
            : <FiMinus className="text-white"/>
    }

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(ApplyVaccineSchema)
    })

    const addVaccineSubmit = async (data) => {
        marcarCompletada()
        data['identity'] = info['child']['obj']['identity']
        data['vaccine_id'] = vaccine_id
        try {
            const res = await VaccineService.apply(data);
            toast.success(res.message)
            reset()
            handleClose()
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return(
        <>

            <Button variant="outline-primary" onClick={handleShow} style={{backgroundColor: color}}>{setIcon(completada)}</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton style={{borderColor: color, borderWidth: "5px"}}>
                    <Modal.Title>Informacion sobre vacuna {nombreVacuna}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { vaccineInfoView }
                    <hr></hr>
                    <p className = "text-muted"><b>Tipo de dosis:</b>
                    { calendarInfoView }
                    </p>
                    <Row>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Fecha de aplicación</Form.Label>
                                <Form.Control
                                    {...register("date")} 
                                    size="md"
                                    type="date"
                                    className={isValid(errors.firstName)} />
                                    <p className="text-danger small">
                                        {errors.firstName && errors.firstName.message}
                                    </p>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Lugar de aplicación</Form.Label>
                                <Form.Control
                                    {...register("place")}
                                    size="md"
                                    type="text"
                                    className={isValid(errors.firstName)} />
                                    <p className="text-danger small">
                                        {errors.firstName && errors.firstName.message}
                                    </p>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-primary" type="submit"onClick={handleSubmit(addVaccineSubmit)}> Marcar como completada </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CalendarButton

