import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import SelectCab from "./selectCab/SelectCab.tsx";
import Header from "./header/Header.tsx";
import BookCab from "./selectCab/BookCab.tsx";
import Admin from './admin/Admin.tsx';
import BookingDetails from './admin/charts/bookingCharts/BookingDetails.tsx';
import TraiffDetails from './admin/TraiffDetails.tsx';
import Footer from "./footer/Footer.tsx";
import ManageVehicles from './admin/vehicles/ManageVehicles.tsx';
import CheckoutBooking from './payments/CheckoutBooking.tsx';
import Login from './admin/Login.tsx';
import RouteManager from './admin/routeManager/RouteManager.tsx';


const App:React.FC = () =>{
  // const user = JSON.parse(localStorage.getItem('loginData'));
  // console.log(user, 'app.tsx');
  
  return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/select-cab"  element={<SelectCab />} />
                <Route path="/book-cab" element={<BookCab />}/>
                <Route path="/pay&book" element={<CheckoutBooking />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/admin/booking-details" element={<BookingDetails />}/>
                <Route path="/admin/traiff-details" element={<TraiffDetails />}/>
                <Route path="/admin/vehicle-details" element={<ManageVehicles />}/>
                <Route path="/admin/route-details" element={<RouteManager />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
  )
}

export default App;
