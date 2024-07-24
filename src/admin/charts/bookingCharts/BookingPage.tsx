// import React from 'react'
import { useNavigate } from 'react-router-dom';
import BookingChart from './BookingChart';
import { IoIosArrowRoundForward } from "react-icons/io";


function BookingPage() {
    const navigate = useNavigate();

  return (
    <div className='pt-44'>
        <div className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-96 cursor-pointer hover:scale-110 ease-in-out duration-500">
            <div className="font-bold underline underline-offset-4 text-center uppercase">
                <h3>Bookings</h3>
            </div>
            <div className='flex flex-col space-y-1 py-3'>
                <h4>Total Booking:<span className="font-bold "> 100</span></h4>
                <h4>Average Booking (weekly):<span className="font-bold "> 9</span></h4>
            </div>
               
            {/* BOOKING CHART */}
                <BookingChart />
                <div className='flex items-center text-red-500 font-bold'>
                    <button onClick={() => navigate('/admin/booking-details')}   className="text-red-500 hover:underline underline-offset-2 "> view all Bookings</button>
                    <IoIosArrowRoundForward className='text-3xl' />
                </div>
                
        </div>
    </div>
  )
}

export default BookingPage