// import React from 'react'
import { useNavigate } from 'react-router-dom';

import UserTrafficChart from './UserTrafficChart';
import { IoIosArrowRoundForward } from "react-icons/io";


function UsersInfo() {

    const navigate = useNavigate();

  return (
    <div>
         <div  onClick={()=> navigate('/admin/manage-users')}   className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-96 cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div  className="font-bold underline underline-offset-4 text-center uppercase">
                    <h3>Users</h3>
                </div>
                <div className='flex flex-col space-y-1 py-3'>
                    <h4>Users: <span className="font-bold "> 1000</span></h4>
                    <h4>Active Users:<span className="font-bold "> 90</span></h4>
                    <h4>blocked Users:<span className="font-bold "> 20</span></h4>
                </div>
             
                {/* USER ON WEBSITE */}
                <UserTrafficChart />
                <div className='flex items-center text-red-500 font-bold'>
                  <button className=" text-xl hover:underline underline-offset-2"> Manage users </button>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
            </div>

    </div>
  )
}

export default UsersInfo;