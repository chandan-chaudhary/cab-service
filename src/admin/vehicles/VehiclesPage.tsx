
// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
// import ManageVehicles from './ManageVehicles';

function VehiclesPage() {
    const navigate = useNavigate();
    return (
        <section className="py-12">
            <div className="bg-gray-200 text-blue-950 w-96 p-5 border-2 border-blue-950 rounded-lg shadow-2xl shadow-green-300 cursor-pointer">
                {/* SECTION INFO */}
              <div className={` flex items-center justify-center underline underline-offset-4 font-bold`}>
                  <h4 className="text-2xl uppercase text-center">vehicle data</h4>
                </div>
    
              {/* ALL VEHICLEs DATA  */}
              <div className='flex flex-col space-y-1 py-3 text-xl '>
                <h4>Total Vehicle:<span className="font-bold "> 100</span></h4>
                <h4>Available Vehicle:<span className="font-bold "> 75</span></h4>
            </div>
            {/* ADD VEHICLE  */}
            {/* <ManageVehicles /> */}

                <div className='flex items-center text-red-500 font-bold'>
                  <button onClick={()=> navigate('/admin/vehicle-details')} className=" text-xl hover:underline underline-offset-2"> view all Bookings </button>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
                
            </div>
        </section>
      )
    }

export default VehiclesPage