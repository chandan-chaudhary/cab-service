import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import SelectCab from "./selectCab/SelectCab.tsx";
import Header from "./header/Header.tsx";
import BookCab from "./selectCab/BookCab.tsx";


const App:React.FC = () =>{
  return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/select-cab"  element={<SelectCab />} />
                <Route path="/book-cab" element={<BookCab />}/>

            </Routes>
        </BrowserRouter>
  )
}

export default App;
