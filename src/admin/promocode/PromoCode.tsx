// import React from 'react'

import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function PromoCode() {

  const [deletePromo, setDeletePromo] = useState<string>('');
  const handlePromo = ():string=>{
    return 'hidden'
  }
  return (
    <section className="py-12">
        <div className="bg-gray-200 text-blue-950 w-96 p-5 border-2 border-blue-950 rounded-lg shadow-2xl shadow-green-300 cursor-pointer">
          <div className={` flex items-center justify-center underline underline-offset-4 font-bold`}>
              <h4 className="text-2xl uppercase text-center">promocode</h4>
            </div>

          {/* ALL PROMOS  */}
          <div className={` ${handlePromo} flex text-xl justify-between border-2 border-gray-600 rounded-lg p-4 my-5`}>
            <h3>Promo: <span className="font-bold"> CARLOS</span></h3>
            <RiDeleteBin5Line onClick={handlePromo}  className="text-2xl text-red-500"/>
          </div>
          <div className={`  ${handlePromo} flex text-xl justify-between border-2 border-gray-600 rounded-lg p-4 my-5`}>
            <h3>Promo: <span className="font-bold"> PABLO</span></h3>
            <RiDeleteBin5Line onClick={handlePromo}  className="text-2xl text-red-500"/>
          </div>

          {/* ADD PROMO */}
          <div className="flex flex-col text-lg ">
            <label htmlFor="promo">Promo:</label>
            <input type="text" name="promo" placeholder="eg: JWT5IO" className="outline-none rounded-lg bg-inherit p-1 pl-3 border-2 border-gray-500"/>
            <button className="p-3 bg-teal-500 text-white uppercase mt-5 rounded-lg hover:scale-95 ease-in-out duration-500">Add Promo</button>
          </div>
        </div>
    </section>
  )
}

export default PromoCode