import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import SelectCab from "./selectCab/SelectCab.tsx";
import Header from "./header/Header.tsx";
import BookCab from "./selectCab/BookCab.tsx";
import Admin from './admin/Admin.tsx';
import BookingDetails from './admin/BookingDetails.tsx';
import TraiffDetails from './admin/TraiffDetails.tsx';


const App:React.FC = () =>{
  return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/select-cab"  element={<SelectCab />} />
                <Route path="/book-cab" element={<BookCab />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/admin/booking-details" element={<BookingDetails />}/>
                <Route path="/admin/traiff-details" element={<TraiffDetails />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App;
