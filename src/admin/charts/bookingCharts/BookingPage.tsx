// import React from 'react'
import { useNavigate } from 'react-router-dom';
// import BookingChart from './BookingChart';
import { IoIosArrowRoundForward } from "react-icons/io";


function BookingPage() {
    const navigate = useNavigate();

  return (
    <div className='pt-44 pb-16 sm:w-96 md:w-9/12'>
        <div className="bg-purple-300 text-blue-950 rounded-lg border-2 border-purple-600 p-6 md:p-12 cursor-pointer shadow-2xl shadow-purple-300">
            <div className="font-bold text-2xl underline underline-offset-4 text-center uppercase">
                <h3>Bookings</h3>
            </div>
            <div className='flex flex-col space-y-1 py-3 text-xl '>
                <h4>Total Booking:<span className="font-bold "> 100</span></h4>
                <h4>Total Payment:<span className="font-bold "> rs 120000</span></h4>
            </div>
            {/* BOOKING CHART */}
                {/* <BookingChart /> */}
                <div className='flex items-center text-red-500 font-bold'>
                  <button onClick={()=> navigate('/admin/booking-details')} className=" text-xl hover:underline underline-offset-2"> view all Bookings </button>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
                
        </div>
    </div>
  )
}

export default BookingPage