// import React from 'react'
import { useNavigate } from 'react-router-dom';
import travel from '../assets/traveling.png';
import BookingDetails from "./BookingDetails";
import TraiffDetails from "./TraiffDetails";
import Earnings from './charts/earnings/Earnings';

const  Admin = ()=> {
    const navigate = useNavigate();
  return (
    <section>
        <div className={`flex flex-col mx-auto  text-blue-950 gap-y-5 items-center md:items-end lg:pr-12 h-screen pt-12`} style={{backgroundImage: `url(${travel})`}}>
            <div onClick={() => navigate('/admin/booking-details')} className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-72 cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div className="font-bold underline underline-offset-4 text-center uppercase">
                    <h3>Bookings</h3>
                </div>
                    <h4>Total Booking:<span className="font-bold "> 100</span></h4>
                    <h4>Average Booking (weekly):<span className="font-bold "> 9</span></h4>
                    <button  className="text-red-500 hover:underline underline-offset-2"> view all Bookings</button>
            </div>
            <div className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-72 cursor-pointer hover:scale-110 ease-in-out duration-500">
            <div   onClick={() => navigate('/admin/manage-users')}  className="font-bold underline underline-offset-4 text-center uppercase">
                    <h3>Users</h3>
                </div>
                    <h4>Users: <span className="font-bold "> 1000</span></h4>
                    <h4>Active Users:<span className="font-bold "> 90</span></h4>
                    <h4>blocked Users:<span className="font-bold "> 20</span></h4>
                    <button className="text-red-500 hover:underline underline-offset-2"> manage users</button>
            </div>
            <div  onClick={() => navigate('/admin/traiff-details')} className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-72 cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div className="font-bold underline underline-offset-4 text-center uppercase">
                        <h3>Traiffs</h3>
                </div>
                <button  className="text-red-500 hover:underline underline-offset-2"> manage traiff & More..</button>
            </div>
            <div className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-72 cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div className="font-bold underline underline-offset-4 text-center uppercase">
                        <h3>Earnings: 1200000</h3>
                </div>
                <Earnings />
            </div>
            
                {/* <BookingDetails /> */}

                {/* <TraiffDetails /> */}
                {/* <div className="grid grid-cols-2 gap-5">
                    <BookingDetails />
                    <BookingDetails />
                    <BookingDetails />
                    <BookingDetails />
                </div> */}
        </div>

    </section>
  )
}

export default Admin;