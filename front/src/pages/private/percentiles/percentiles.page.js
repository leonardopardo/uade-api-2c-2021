import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import WeightChart from './graphs/weight.page';
import HeightChart from './graphs/height.page';
import HeadCircumferenceChart from './graphs/headCircumference.page';

import ControlService from '../../../services/ControlService';


const Percentiles = ({children}) => {

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
            children_names.push({'value': child['identity'], 'label': child['firstName']})
        })
        setAvailableChildrenState(children_names)
    }

    useEffect(() => {
        const children_names = async () => await getChildrenNames()
        setAvailableChildrenState(children_names)
    }, [])

    // For loading the control data
    const [
        childrenControlsState,
        setChildrenControlsState
    ] = useState({});

    const [
        childrenControlsLoadingState,
        setChildrenControlsLoadingState
    ] = useState(true);

    const handleChildSelect = async (child) => {
        let child_percentiles = await ControlService.getPercentiles(child)
        setChildrenControlsState(child_percentiles)
        setChildrenControlsLoadingState(false)
    }

    const animatedComponents = makeAnimated();


    return(
        <>
            <section>
                <Row className="my-4">
                    <Select
                        defaultValue="null"
                        onChange={handleChildSelect}
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        options={availableChildrenState} />
                </Row>
                <hr></hr>
                {
                    !childrenControlsLoadingState &&
                    <>
                        <WeightChart values={childrenControlsState['weight']} child={childrenControlsState['child']}/>
                        <hr></hr>
                        <HeightChart values={childrenControlsState['height']} child={childrenControlsState['child']}/>
                        <hr></hr>
                        <HeadCircumferenceChart values={childrenControlsState['diameter']} child={childrenControlsState['child']}/>
                    </>
                }
            </section>
        </>
    )
}

export default Percentiles