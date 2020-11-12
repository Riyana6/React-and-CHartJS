/*import React from 'react';
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],            
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Quantity',
                    data: [20,25,10,0,5,12],
                    backgroundColor: 'light blue',
                    borderColor: 'red'
                }
                ], 
            }}
            height={400}
            width={600}
            options={{ maintainAspectRatio: false }}
        />
    </div>
}

export default BarChart;*/



import React , {render} from 'react';
import { Bar } from 'react-chartjs-2'
import contacts from './NAT64_1_20.json';

const BarChart = () => {
    
        render  (
            (contacts.map(el => {
                return(
            <div>
                <Bar
                    data={{
                        labels:[el.Length],            
                        datasets: [{
                            label: '# of Votes',
                            data: [el.Time]
                        }], 
                    }}
                    height={400}
                    width={600}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
                )
            }))
        )
    
}

export default BarChart;