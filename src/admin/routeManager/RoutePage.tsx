// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import traiffIcon from '../../assets/admin/traiff.png';



function RoutePage() {
  const navigate = useNavigate();

    return (
        <section>
           <div className="bg-white text-blue-950 rounded-lg border-t-8 border-blue-900  cursor-pointer drop-shadow-2xl">
            <div className=" flex items-center justify-center space-x-8  font-bold text-2xl text-center uppercase py-2">
              <img src={traiffIcon} alt="booking-Icon" className='w-20' />
              <h3>routes</h3>
            </div>
            <div className='flex items-center text-red-500 font-bold hover:scale-95 ease-in-out duration-500 border-t-2 px-6 p-3'>
              <button onClick={() => navigate('/admin/route-details')} className=" text-xl hover:underline underline-offset-2"> manage all routes </button>
              <IoIosArrowRoundForward className='text-3xl' />
            </div>
          </div>
        </section>
    )
}

export default RoutePage