
// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import vehicleIcon from '../../assets/admin/booking.png';
// import ManageVehicles from './ManageVehicles';

function VehiclesPage() {
    const navigate = useNavigate();
    return (
      <div className='sm:max-md:pt-44 pb-16 sm:w-96 md:7/12 lg:w-fit  '>
      <div className="bg-white text-blue-950 rounded-lg border-t-8 border-blue-900  cursor-pointer drop-shadow-2xl">
          <div className=" flex items-center justify-center space-x-8 font-bold text-2xl text-center uppercase py-5">
                <img src={vehicleIcon} alt="booking-Icon" className='w-20' />
              <h3>Vehicles</h3>
          </div>
          <div className='flex text-center justify-center items-center space-x-5 py-5 text-xl px-6 font-bold  '>
              <div className='flex flex-col gap-y-2 border-2 border-blue-800  rounded-lg p-3 w-44'>
                <h4>total</h4>
                {/* <div className='h-0.5 w-full bg-blue-900'></div> */}
                <h4>100</h4>
              </div>
              <div className='flex flex-col gap-y-2 border-2 border-blue-800 rounded-lg p-3 w-44'>
                <h4>active</h4>
                {/* <div className='h-0.5 w-full bg-blue-900'></div> */}
                <h4>70</h4>
              </div>
          </div>
          {/* BOOKING CHART */}
              {/* <BookingChart /> */}
              <div className='flex items-center text-red-500 font-bold hover:scale-95 ease-in-out duration-500 border-t-2 px-6 p-3'>
                <button onClick={()=> navigate('/admin/vehicle-details')} className=" text-xl hover:underline underline-offset-2"> view all Bookings </button>
                <IoIosArrowRoundForward className='text-3xl' />
              </div>
              
      </div>
  </div>
      )
    }

export default VehiclesPage