// import React from 'react'
import { bookingChart } from './bookingChart';

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js';
// REGISTRATION
 ChartJs.register(ArcElement, Tooltip, Legend)


function BookingChart() {
  return (
    <div className='p-4 w-full bg-white my-5'><Pie options={{}} data={bookingChart}/></div>
  )
}

export default BookingChart;