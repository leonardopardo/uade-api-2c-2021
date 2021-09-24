import React from 'react'
import { Container } from 'react-bootstrap'
import { Line } from 'react-chartjs-2';


const HeadCircumferenceChart = () => {

    const data = {
		labels: ['0', '0.25', '0.5', '0.75', '1', '1.5', '2'],
		datasets: [
			{
				label: 'P97',
				data: [37.11,43.37,46.30,48.18,49.47,51.09,52.00],
				borderDash: [10,5],
				fill: false,
				backgroundColor: 'rgb(128, 128, 128)',
				borderColor: 'rgba(128, 128, 128, 0.2)',
			},
		  	{
				label: 'P50',
				data: [34.84 ,41.2 ,44.15 ,46.02 ,47.31 ,48.7 ,49.59],
				fill: false,
				backgroundColor: 'rgb(0, 0, 0)',
				borderColor: 'rgba(0, 0, 0, 0.2)',
		  	},
			{
				label: 'P3',
				data: [32.57 ,38.93 ,42.01 ,43.86 ,45.14 ,46.32 ,47.20],
				borderDash: [10,5],
				fill: false,
				backgroundColor: 'rgb(160, 160, 160)',
				borderColor: 'rgba(160, 160, 160, 0.2)',
		  	},
			{
				label: 'Hijo',
				data: [0,0,0,0,0,0,0],
				fill: false,
				backgroundColor: 'rgb(255, 153, 153)',
				borderColor: 'rgba(255, 153, 153, 0.2)',
		  	},
		]
	}
	  
	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};
    
    return(
        <>
            <Container>
                <h2>Tabla de Perímetro Cefálico (cm)</h2>
                <Line
                    data={data}
                    options={options}
                />
            </Container>
        </>
    )
}

export default HeadCircumferenceChart