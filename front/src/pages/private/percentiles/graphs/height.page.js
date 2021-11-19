import React from 'react'
import { Container } from 'react-bootstrap'

import ReactEcharts from 'echarts-for-react'


const HeightChart = ({values, child}) => {

	var child_age = child['obj']['age'].split('-')
	var birthdate = new Date(child_age[0], child_age[1], child_age[2])
	var dataP97 = [
		[birthdate, 53.64],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 64.40],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 70.92],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 75.68],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 80.01],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 86.57],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 92.12],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth()+5, birthdate.getDay()), 98.62],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth(), 	birthdate.getDay()), 102.82],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth()+5, birthdate.getDay()), 107.07],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth(), 	birthdate.getDay()), 111.28],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth()+5, birthdate.getDay()), 115.41],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth(), 	birthdate.getDay()), 119.40],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth()+5, birthdate.getDay()), 124.00],
		[new Date(birthdate.getFullYear()+6,birthdate.getMonth(), 	birthdate.getDay()), 126.18],
	];

	var dataP50 = [
		[birthdate, 50.06],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 60.44],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 66.81],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 71.10],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 75.08],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 81.33],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 86.68],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth()+5, birthdate.getDay()), 90.77],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth(), 	birthdate.getDay()), 94.62],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth()+5, birthdate.getDay()), 98.41],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth(), 	birthdate.getDay()), 102.11],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth()+5, birthdate.getDay()), 105.69],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth(), 	birthdate.getDay()), 109.11],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth()+5, birthdate.getDay()), 113.20],
		[new Date(birthdate.getFullYear()+6,birthdate.getMonth(), 	birthdate.getDay()), 115.40],
	];

	var dataP3 = [
		[birthdate, 46.47],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+2,	birthdate.getDay()), 56.48],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+5,	birthdate.getDay()), 62.70],
		[new Date(birthdate.getFullYear(), 	birthdate.getMonth()+8,	birthdate.getDay()), 66.53],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth(),	birthdate.getDay()), 70.15],
		[new Date(birthdate.getFullYear()+1,birthdate.getMonth()+5, birthdate.getDay()), 76.10],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth(),	birthdate.getDay()), 81.24],
		[new Date(birthdate.getFullYear()+2,birthdate.getMonth()+5, birthdate.getDay()), 82.93],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth(), 	birthdate.getDay()), 86.42],
		[new Date(birthdate.getFullYear()+3,birthdate.getMonth()+5, birthdate.getDay()), 89.76],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth(), 	birthdate.getDay()), 92.95],
		[new Date(birthdate.getFullYear()+4,birthdate.getMonth()+5, birthdate.getDay()), 95.97],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth(), 	birthdate.getDay()), 98.83],
		[new Date(birthdate.getFullYear()+5,birthdate.getMonth()+5, birthdate.getDay()), 101.54],
		[new Date(birthdate.getFullYear()+6,birthdate.getMonth(), 	birthdate.getDay()), 103.63],
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
			axisLine: {
				onZero: false
			}
		},
		yAxis: {
			type: 'value',
			min: 45
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
                <h2>Tabla de altura (cm)</h2>
                <ReactEcharts
					option={options}
				/>
            </Container>
        </>
    )
}

export default HeightChart