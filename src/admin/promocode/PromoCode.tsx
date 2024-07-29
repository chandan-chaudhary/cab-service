// import React from 'react'

import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import promoIcon from '../../assets/admin/promocode.png';


function PromoCode() {

  const [showAddPromo, setShowAddPromo] = useState<boolean>(false);
  const handlePromo = ():string=>{
    return 'hidden'
  }
  return (
    <section className="w-96 md:w-7/12 lg:w-8/12">
        <div className="bg-white text-blue-950 border-t-8 border-blue-900 rounded-lg drop-shadow-2xl cursor-pointer">
        <div className=" flex items-center justify-center space-x-8 font-bold text-2xl text-center uppercase mt-5">
                  <img src={promoIcon} alt="booking-Icon" className='w-20' />
                <h3>Promocode</h3>
            </div>
          {/* ALL PROMOS  */}
          <div className="px-5">
            <div className={` ${handlePromo} flex text-xl justify-between border-2 border-blue-800 rounded-lg p-4 my-3 mt-10`}>
              <h3><span className="font-bold pl-5"> CAR1OS</span></h3>
              <RiDeleteBin5Line onClick={handlePromo}  className="text-2xl text-red-500"/>
            </div>
            <div className={`  ${handlePromo} flex text-xl justify-between border-2 border-blue-800 rounded-lg p-4 my-3`}>
              <h3><span className="font-bold pl-5"> PAB1O</span></h3>
              <RiDeleteBin5Line onClick={handlePromo}  className="text-2xl text-red-500"/>
            </div>
          </div>
          <h6 onClick={() => setShowAddPromo(!showAddPromo)} className="text-end px-12 text-teal-700 underline text-md pb-3">{showAddPromo ? 'add promo':'hide promo'}</h6>

          {/* ADD PROMO */}
          <div className={` ${showAddPromo && 'hidden'} flex flex-col text-xl space-y-3 font-bold border-t-2 py-3 px-5  duration-500`}>
            <label htmlFor="promo">Add Promo</label>
            <input type="text" name="promo" placeholder="eg: JWT5IO" className="outline-none rounded-lg bg-inherit p-1 pl-3 border-2 border-blue-800"/>
            <button className="p-3 bg-teal-500 text-white uppercase mt-5 rounded-lg hover:scale-95 ease-in-out duration-500">Add</button>
          </div>
        </div>
    </section>
  )
}

export default PromoCode