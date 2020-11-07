import React from 'react';
import { Polar } from 'react-chartjs-2'

const PolarAreaChart = () => {
    return <div>
        <Polar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],            
                datasets: [{
                    labels: [
                        'Red',
                        'Yellow',
                        'Blue'
                    ],
                    data: [5, 4, 3]
                }
                ]
            }}
        />
    </div>
}

export default PolarAreaChart;