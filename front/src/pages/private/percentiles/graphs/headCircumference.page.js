import React from 'react'
import { Container } from 'react-bootstrap'

import ReactEcharts from 'echarts-for-react'


const HeadCircumferenceChart = ({values, child}) => {

	var child_age = child['obj']['age'].split('-')
	var birthdate = new Date(child_age[0], child_age[1], child_age[2])
	var dataP97 = [
		[birthdate, 37.11],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 43.37],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 46.30],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 48.18],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 49.47],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 51.09],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 52.00]
	];

	var dataP50 = [
		[birthdate, 34.84],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 41.2 ],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 44.15],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 46.02],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 47.31],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 48.7 ],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 49.59]
	];

	var dataP3 = [
		[birthdate, 32.57],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 38.93],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 42.01],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 43.86],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 45.14],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 46.32],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 47.20]
	];
	  
	const options = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
			  return [pt[0], '10%'];
			}
		},
		legend: {
			data: ['P97', 'P50', 'P3', child['label']]
		},
		xAxis: {
			type: 'time',
		},
		yAxis: {
			type: 'value',
			min: 30
		},
		series: [
		{
			name: "P97",
			data: dataP97,
			type: 'line'
		},
		{
			name: "P50",
			data: dataP50,
			type: 'line'
		},
		{
			name: "P3",
			data: dataP3,
			type: 'line'
		},
		{
			name: child['label'],
			data: values,
			type: 'line'
		}
		]
	};
    
    return(
        <>
            <Container>
                <h2>Tabla de Perímetro Cefálico (cm)</h2>
					<ReactEcharts
						option={options}
					/>
            </Container>
        </>
    )
}

export default HeadCircumferenceChart