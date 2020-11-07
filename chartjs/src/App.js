import React from'react';
import BarChart from'./components/BarChart';
import LineChart from'./components/LineChart';
import RadarChart from'./components/RadarChart';
import './App.css';

const App = () => {
  return (
    <div>
        <BarChart />
        <LineChart />
        <RadarChart />
    </div>
  )
}

export default App;
