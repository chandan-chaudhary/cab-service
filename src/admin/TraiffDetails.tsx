

// import React from 'react'

import { useState } from "react"
import Traiff from '../traiff/Traiff';

function TraiffDetails() {
const [traiff, setTraiff] = useState<string>('one-way');
const [editMode, setEditMode] = useState<string>('');

const handleEditMode = (mode:string)=>{
    setEditMode(mode);
};

const handleEditModeColor= (mode:string) =>{
  if(mode === 'add')  return 'bg-teal-500';
  if(mode === 'update')  return 'bg-purple-600';
  if(mode === 'remove')  return 'bg-red-500';
}

  return (
    <section className="">
      <div className=' bg-gray-100 text-blue-950 py-16 '>
          {/* TRAIFF */}
            <div>
                <Traiff />
            </div>
          {/* TRAIFF MODIFICATION FORM */}
          <div className={` ${editMode === '' && 'hidden'} border-2 border-gray-300  rounded-lg py-8 mt-5 mx-5 md:mx-24 `}>
            <div className="flex flex-row text-lg space-x-5 font-bold  items-center justify-center">
              <h3 onClick={()=>setTraiff('one-way') } className={`${traiff === 'one-way' && 'border-b-2 border-blue-950' } text-blue-950`}>One Way Traiff</h3>
              <h3 onClick={()=>setTraiff('roundtrip')} className={`${traiff === 'roundtrip' && 'border-b-2 border-blue-950' } text-blue-950`} >Roundtrip Traiff</h3>
            </div>
            <form className="flex flex-col items-center py-8 space-y-4">
              <div className="text-xl flex sm:flex-col w-full md:px-24 ">
                <label htmlFor="vehicle-type">Veichle Type:</label>
                <input type='text' name='vehicle-type' placeholder='Vehicle type' className="bg-gray-100 rounded-lg border-2" />
              </div>

              {/* EDITMODE === REMOVE */}
              {
                editMode === 'remove' ||
                 <>
                  <div className="text-xl flex  sm:flex-col justify-between w-full md:px-24 ">
                  <label htmlFor="rate">Rate (per KM):</label>
                  <input type='number' name='rate' placeholder='rate/KM'   className="bg-gray-100 rounded-lg border-2 " />
                  </div>
                  <div className="text-xl flex  sm:flex-col  justify-between w-full md:px-24">
                  <label htmlFor="driver-bata">Driver Bata:</label>
                  <input type='number' name='driver-bata' placeholder='eg: ₹300'  className="bg-gray-100 rounded-lg border-2  " />
                  </div>
                  <div className="text-xl flex  sm:flex-col justify-between w-full md:px-24">
                  <label htmlFor="extra-charge">Additional Charges:</label>
                  <input type='number' name='extra-charge' placeholder='eg: ₹500'   className="bg-gray-100 rounded-lg border-2 "/>
                  </div>
                </> 
              }
              <button className={`${handleEditModeColor(editMode)} w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>{editMode}</button>
            </form>
          </div>

          {/* MANAGE MODIFICATION  */}
          <div  className=" flex space-x-5 items-center justify-center text-center mt-5">
            <button onClick={() =>handleEditMode('add')} className={`${editMode === 'add' && 'hidden'} bg-teal-500 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>add</button>
            <button onClick={() =>handleEditMode('update')} className={`${editMode === 'update' && 'hidden'} bg-purple-600 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>update</button>
            <button onClick={() =>handleEditMode('remove')} className={`${editMode === 'remove' && 'hidden'} bg-red-500 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>remove</button>
          </div>     
        
        </div>
    </section>
  )
}

export default TraiffDetails