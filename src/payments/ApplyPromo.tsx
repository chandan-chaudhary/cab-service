

// import React from 'react'
import { MdLocalOffer } from "react-icons/md";


function ApplyPromo() {
  return (
    <section>
        <div className='flex flex-col gap-y-7 items-center text-blue-950 bg-white p-5 mx-4 px-12 my-8 border-b-4 border-blue-950 rounded-lg '>
            <div className="flex space-x-8 items-center">
                <MdLocalOffer  className=" text-3xl text-yellow-600"/>
                <h5 className='uppercase  text-xl font-kanit font-bold'>offers</h5>
            </div>
            <input type="text" name="promo" placeholder='enter promo' className='rounded-lg bg-inherit border-2 border-gray-500 p-1 pl-3 w-full' />
            <button className='p-2 bg-yellow-600 rounded-lg text-white uppercase px-5 font-semibold'>apply code</button>
        </div>
    </section>
  )
}

export default ApplyPromo