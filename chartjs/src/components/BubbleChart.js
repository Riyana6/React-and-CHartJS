port React from 'react';
import { Bubble } from 'react-chartjs-2'

const BubbleChart = () => {
    return <div>
        <Bubble
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],            
                datasets: [{
                    label: 'Bubble Chart',
                    data: {  // X Value
                        x: 2,
                    
                        // Y Value
                        y: 5,
                    
                        // Bubble radius in pixels (not scaled).
                        r: 6
                    },
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }
                ], 
            }}
            height={400}
            width={600}
            options={{ maintainAspectRatio: false }}
        />
    </div>
}

export default BubbleChart;