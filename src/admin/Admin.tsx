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


// style={{backgroundImage: `url(${travel})`}}
const  Admin = ()=> {
    const navigate = useNavigate();
  return (
    <section>
        <div className={`flex flex-col mx-auto bg-blue-200  text-blue-950 gap-y-5 items-center lg:pr-12 py-12`}>
            {/* BOOKING */}
            <BookingPage />

            {/* VEHICLES  */}
            <VehiclesPage />
           
            {/* PROMOCODE */}
            <PromoCode />

            {/* TRAIFF */}
              <div  className="my-12 bg-gray-200 rounded-lg border-2 border-gray-700  w-96 cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div className="font-bold text-2xl underline underline-offset-4 text-center uppercase p-5">
                        <h3>Traiffs</h3>
                </div>
               
                <div className='flex items-center text-red-500 font-bold py-4 pl-6'>
                  <button onClick={()=> navigate('/admin/traiff-details')} className=" text-xl hover:underline underline-offset-2">manage traiff & More..</button>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Admin;