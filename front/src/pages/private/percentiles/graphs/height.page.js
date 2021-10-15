import React from 'react'
import { Container } from 'react-bootstrap'
import { Line } from 'react-chartjs-2';


const HeightChart = () => {

    const data = {
		labels: ['0', '0.25', '0.5', '0.75', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'],
		datasets: [
			{
				label: 'P97',
				data: [53.64,64.40,70.92,75.68,80.01,86.57,92.12,98.62,102.82 ,107.07 ,111.28 ,115.41 ,119.40 ,124.00 ,126.18],
				borderDash: [10,5],
				fill: false,
				backgroundColor: 'rgb(128, 128, 128)',
				borderColor: 'rgba(128, 128, 128, 0.2)',
			},
		  	{
				label: 'P50',
				data: [50.06, 60.44, 66.81, 71.1, 75.08, 81.33, 86.68, 90.77, 94.62, 98.41, 102.11, 105.69, 109.11, 113.20, 115.40],
				fill: false,
				backgroundColor: 'rgb(0, 0, 0)',
				borderColor: 'rgba(0, 0, 0, 0.2)',
		  	},
			{
				label: 'P3',
				data: [46.47,56.48,62.70,66.53,70.15,76.10,81.24,82.93,86.42,89.76,92.95,95.97,98.83,101.54 ,103.63],
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
	};
	  
	const options = {
		scales: {
			xAxes: [{
				scaleLabel: {
					labelString: "Años",
					display: true
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
				},
			}]
		}
	};
    
    return(
        <>
            <Container>
                <h2>Tabla de altura (cm)</h2>
                <Line
                    data={data}
                    options={options}
                />
            </Container>
        </>
    )
}

export default HeightChart