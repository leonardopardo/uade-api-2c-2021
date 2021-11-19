import React from 'react'
import { Container } from 'react-bootstrap'

import ReactEcharts from 'echarts-for-react'

const WeightChart = ({values, child}) => {
	
	var child_age = child['obj']['age'].split('-')
	var birthdate = new Date(child_age[0], child_age[1], child_age[2])
	var dataP97 = [
		[birthdate, 4.41],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 7.78],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 9.90],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 11.43],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 12.51],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 13.92],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 15.55],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth()+5, birthdate.getDay()), 16.70],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth(), 	birthdate.getDay()), 18.25],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth()+5, birthdate.getDay()), 19.95],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth(), 	birthdate.getDay()), 20.79],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth()+5, birthdate.getDay()), 22.07],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth(), 	birthdate.getDay()), 23.44],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth()+5, birthdate.getDay()), 25.36],
		[new Date(birthdate.getFullYear()+6,birthdate.getMonth(), 	birthdate.getDay()), 27.78],
	];

	var dataP50 = [
		[birthdate, 3.47],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 6.26],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 8.02],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 9.24],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 10.15],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 11.45],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 12.70],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth()+5, birthdate.getDay()), 13.84],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth(), 	birthdate.getDay()), 14.84],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth()+5, birthdate.getDay()), 15.92],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth(), 	birthdate.getDay()), 16.90],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth()+5, birthdate.getDay()), 17.95],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth(), 	birthdate.getDay()), 19.06],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth()+5, birthdate.getDay()), 20.24],
		[new Date(birthdate.getFullYear()+6,birthdate.getMonth(), 	birthdate.getDay()), 21.40],
	];

	var dataP3 = [
		[birthdate, 3.47],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 5.04],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 6.50],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 7.47],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 8.23],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 9.42],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 10.37],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth()+5, birthdate.getDay()), 11.47],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth(), 	birthdate.getDay()), 12.07],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth()+5, birthdate.getDay()), 12.70],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth(), 	birthdate.getDay()), 13.00],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth()+5, birthdate.getDay()), 13.16],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth(), 	birthdate.getDay()), 13.55],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth()+5, birthdate.getDay()), 13.86],
		[new Date(birthdate.getFullYear()+6,birthdate.getMonth(), 	birthdate.getDay()), 14.14],
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
			type: 'time'
		},
		yAxis: {
			type: 'value',
			min: 3
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
                <h2>Tabla de peso (kg)</h2>
                <ReactEcharts
					option={options}
				/>
            </Container>
        </>
    )
}

export default WeightChart