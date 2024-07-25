// import React from 'react'
import { useNavigate } from 'react-router-dom';
// IMAGES
// import travel from '../assets/traveling.png';
// COMPONENTS
// import BookingDetails from "./BookingDetails";
// import TraiffDetails from "./TraiffDetails";
// import UsersInfo from './charts/userTraffic/UsersInfo';
import BookingPage from './charts/bookingCharts/BookingPage';
// import EarningDetails from './charts/earnings/EarningDetails';
import PromoCode from './promocode/PromoCode';
import { IoIosArrowRoundForward } from "react-icons/io";
import VehiclesPage from './vehicles/VehiclesPage';
import traiffIcon from '../assets/admin/traiff.png';


// style={{backgroundImage: `url(${travel})`}}
const  Admin = ()=> {
    const navigate = useNavigate();
  return (
    <section>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-y-20 place-items-center mx-auto bg-gray-100  text-blue-950 sm:max-md:gap-y-5 items-center lg:items-start py-24 pt-44`}>
            {/* BOOKING */}
            <BookingPage />

            {/* VEHICLES  */}
            <VehiclesPage />
           
            {/* PROMOCODE */}
            <PromoCode />

            {/* TRAIFF */}
            <div className='sm:max-md:pt-44 pb-16 sm:w-96 md:w-7/12 lg:w-9/12 '>
        <div className="bg-white text-blue-950 rounded-lg border-t-8 border-blue-900  cursor-pointer drop-shadow-2xl">
            <div className=" flex items-center justify-center space-x-8 font-bold text-2xl text-center uppercase py-5">
                  <img src={traiffIcon} alt="booking-Icon" className='w-20' />
                <h3>traiffs</h3>
            </div>
            {/*  */}
            {/* <div className='flex text-center justify-center items-center space-x-5 py-5 text-xl px-6 font-bold  '>
                <div className='flex flex-col gap-y-2 border-2 border-blue-800  rounded-lg p-3 w-44'>
                  <h4>Bookings</h4>
                  <div className='h-0.5 w-full bg-blue-900'></div>
                  <h4>100</h4>
                </div>
                <div className='flex flex-col gap-y-2 border-2 border-blue-800 rounded-lg p-3 w-44'>
                  <h4>Payments</h4>
                  <div className='h-0.5 w-full bg-blue-900'></div>
                  <h4>₹ 10,52,000</h4>
                </div>
            </div> */}
            {/* BOOKING CHART */}
                {/* <BookingChart /> */}
                <div className='flex items-center text-red-500 font-bold hover:scale-95 ease-in-out duration-500 border-t-2 px-6 p-3'>
                  <button onClick={()=> navigate('/admin/booking-details')} className=" text-xl hover:underline underline-offset-2"> view all Bookings </button>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
                
        </div>
    </div>
        </div>

    </section>
  )
}

export default Admin;