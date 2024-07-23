

// import React from 'react'

import { useState } from "react"

function TraiffDetails() {
const [traiff, setTraiff] = useState<string>('one-way');


  return (
    <section>
      <div className=' bg-gray-100 text-blue-950  '>
          <div className="flex flex-row text-lg space-x-5 font-bold  pl-5">
            <h3 onClick={()=>setTraiff('one-way') } className={`${traiff === 'one-way' && 'underline underline-offset-8' } text-blue-950`}>One Way Traiff</h3>
            <h3 onClick={()=>setTraiff('roundtrip')} className={`${traiff === 'roundtrip' && 'underline underline-offset-4' } text-blue-950`} >Roundtrip Traiff</h3>
          </div>
          <div className="border-2 border-gray-300  rounded-lg py-8 mx-5 mt-5 ">
            <form className="flex flex-col items-center ">
              <div className="text-xl flex sm:flex-col ">
                <label htmlFor="vehicle-type">Veichle Type:</label>
                <input type='text' name='vehicle-type' placeholder='Vehicle type' className="bg-gray-100 rounded-lg border-2" />
              </div>
              <div className="text-xl flex  sm:flex-col justify-between  ">
                <label htmlFor="rate">Rate (per KM):</label>
                <input type='number' name='rate' placeholder='rate/KM'   className="bg-gray-100 rounded-lg border-2 " />
              </div>
              <div className="text-xl flex  sm:flex-col  justify-between ">
                <label htmlFor="driver-bata">Driver Bata:</label>
                <input type='number' name='driver-bata' placeholder='eg: ₹300'  className="bg-gray-100 rounded-lg border-2  " />
              </div>
              <div className="text-xl flex  sm:flex-col justify-between ">
                <label htmlFor="extra-charge">Additional Charges:</label>
                <input type='number' name='extra-charge' placeholder='eg: ₹500'   className="bg-gray-100 rounded-lg border-2 "/>
              </div>
              <button className="bg-teal-500  mt-5 text-center p-3 rounded-lg uppercase font-bold text-white">add</button>
            </form>
            <button className="bg-red-500  mt-5 text-center p-3 rounded-lg uppercase font-bold text-white">remove</button>

          </div>
        
        </div>
    </section>
  )
}

export default TraiffDetails