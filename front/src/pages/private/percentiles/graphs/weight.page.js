import React from 'react'
import { Container } from 'react-bootstrap'
import { Line } from 'react-chartjs-2';


const WeightChart = () => {

    const data = {
		labels: ['0', '0.25', '0.5', '0.75', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'],
		datasets: [
			{
				label: 'P97',
				data: [4.41 ,7.78 ,9.90 ,11.43 ,12.51 ,13.92 ,15.55 ,16.70,18.25,19.95,20.79,22.07,23.44,25.36,27.78],
				borderDash: [10,5],
				fill: false,
				backgroundColor: 'rgb(128, 128, 128)',
				borderColor: 'rgba(128, 128, 128, 0.2)',
			},
		  	{
				label: 'P50',
				data: [3.47 ,6.26 ,8.02 ,9.24 ,10.15 ,11.45 ,12.70 ,13.84 ,14.84 ,15.92 ,16.90 ,17.95 ,19.06 ,20.24 ,21.40],
				fill: false,
				backgroundColor: 'rgb(0, 0, 0)',
				borderColor: 'rgba(0, 0, 0, 0.2)',
		  	},
			{
				label: 'P3',
				data: [2.73 ,5.04 ,6.50 ,7.47 ,8.23 ,9.42 ,10.37 ,11.47 ,12.07 ,12.70 ,13.00 ,13.16 ,13.55 ,13.86 ,14.14],
				borderDash: [10,5],
				fill: false,
				backgroundColor: 'rgb(160, 160, 160)',
				borderColor: 'rgba(160, 160, 160, 0.2)',
		  	},
			{
				label: 'Hijo',
				data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
                <h2>Tabla de peso (kg)</h2>
                <Line
                    data={data}
                    options={options}
                />
            </Container>
        </>
    )
}

export default WeightChart