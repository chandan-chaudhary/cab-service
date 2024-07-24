// import React from 'react'
import { userTrafficChart } from './userTraffic';

import { Line } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title,
    Tooltip, Legend
 } from 'chart.js';

 ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title,
    Tooltip, Legend)




function UserTrafficChart() {
  return (
    <div className='p-4 w-full bg-white my-4'><Line options={{}} data={userTrafficChart}/></div>
  )
}

export default UserTrafficChart;