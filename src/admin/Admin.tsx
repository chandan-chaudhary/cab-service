// import React from 'react'
import { useNavigate } from 'react-router-dom';
// IMAGES
// import travel from '../assets/traveling.png';
// COMPONENTS
// import BookingDetails from "./BookingDetails";
// import TraiffDetails from "./TraiffDetails";
import UsersInfo from './charts/userTraffic/UsersInfo';
import BookingPage from './charts/bookingCharts/BookingPage';
import EarningDetails from './charts/earnings/EarningDetails';


// style={{backgroundImage: `url(${travel})`}}
const  Admin = ()=> {
    const navigate = useNavigate();
  return (
    <section>
        <div className={`flex flex-col mx-auto bg-blue-950  text-blue-950 gap-y-5 items-center md:items-end lg:pr-12 py-12`}>
            {/* BOOKING */}
            <BookingPage />

            {/* USERS */}
            <UsersInfo />
           
            {/* EARNINGS */}
            <EarningDetails />

            {/* TRAIFF */}
              <div  onClick={() => navigate('/admin/traiff-details')} className="bg-gray-700 text-white rounded-lg border-2 border-gray-700 p-6 w-96 cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div className="font-bold underline underline-offset-4 text-center uppercase">
                        <h3>Traiffs</h3>
                </div>
                <button  className="text-red-500 hover:underline underline-offset-2"> manage traiff & More..</button>
            </div>
        </div>

    </section>
  )
}

export default Admin;