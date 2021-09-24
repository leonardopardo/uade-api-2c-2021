import React, {useState} from 'react'
import { Row } from 'react-bootstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import WeightChart from './graphs/weight.page';
import HeightChart from './graphs/height.page';
import HeadCircumferenceChart from './graphs/headCircumference.page';


const Percentiles = () => {

    const childrens = [
        {value: '1', label:'Nicolás'}
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const animatedComponents = makeAnimated();


    return(
        <>
            <section>
                    <Row className="my-4">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            options={childrens} />
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