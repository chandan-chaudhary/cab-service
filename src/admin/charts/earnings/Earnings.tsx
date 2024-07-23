// import React from 'react'
import { earningChart } from './earnings'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title,
    Tooltip, Legend
 } from 'chart.js';

 ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title,
    Tooltip, Legend)

function Earnings() {
    const options = {}
  return (
    <div className='bg-white p-5'><Line options={options} data={earningChart}/></div>
  )
}

export default Earnings