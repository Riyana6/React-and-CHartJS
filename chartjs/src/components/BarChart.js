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



import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2'


import LogData from './NAT64_1_20.json';

const HorizontalBarChart = ()=> {

    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        if(loading){
            const tempData = [];
            const tempLabels = [];
            for(let i=0; i< LogData.length; i++){
                tempData.push(parseInt(LogData[i].Destination, 10));
                tempLabels.push(LogData[i].Source);
            }
            setData(tempData);
            setLabels(tempLabels);
            setLoading(false);
            // LogData.forEach(e => {
            //     console.log(1)
            //     setData([...data, parseInt(e.Length, 10)]);
            //     setLabels([...labels, e.Source]);
            // })
        }
    })
 
    return  ( 
        <div>
            <HorizontalBar
                data={{
                    labels:labels,            
                    datasets: [{
                        label: '# of Votes',
                        data:data,
                        backgroundColor: 'light blue',
                        borderColor: 'red'
                    }], 
                }}
                height={2000}
                width={500}
                options={{ maintainAspectRatio: false }}
                
            />
        </div>
    )
}

       
export default HorizontalBarChart;

