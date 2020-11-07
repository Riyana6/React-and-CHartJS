import React from 'react';
import { Scatter } from 'react-chartjs-2'

const ScatterChart = () => {
    return <div>
        <Scatter
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],            
                datasets: [{
                    label: 'Scatter Dataset',
                    data: [{
                        x: -10,
                        y: 0
                    }, {
                        x: 3,
                        y: 20
                    }, {
                        x: 10,
                        y: 5
                    }]
                }],
                options: {
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                }
            }}
            
        />
    </div>
}

export default ScatterChart;