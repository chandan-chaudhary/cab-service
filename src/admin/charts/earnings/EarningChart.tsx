// import React from 'react'
import { earningChart } from './earnings'

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title,
    Tooltip, Legend
 } from 'chart.js';

 ChartJs.register(CategoryScale, LinearScale, BarElement, Title,
    Tooltip, Legend)

function EarningsChart() {
    const options = {}
  return (
    <div className='bg-white p-5 w-full'><Bar options={options} data={earningChart}/></div>
  )
}

export default EarningsChart;