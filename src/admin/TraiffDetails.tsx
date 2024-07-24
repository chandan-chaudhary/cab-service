

// import React from 'react'

import { useState } from "react"

function TraiffDetails() {
const [traiff, setTraiff] = useState<string>('one-way');
const [editMode, setEditMode] = useState<string>('add');

const handleEditMode = (mode:string)=>{
    setEditMode(mode);
};

const handleEditModeColor= (mode:string) =>{
  if(mode === 'add')  return 'bg-teal-500';
  if(mode === 'update')  return 'bg-purple-600';
  if(mode === 'remove')  return 'bg-red-500';
}

  return (
    <section>
      <div className=' bg-gray-100 text-blue-950 py-12  '>
          <div className="flex flex-row text-lg space-x-5 font-bold  items-center justify-center">
            <h3 onClick={()=>setTraiff('one-way') } className={`${traiff === 'one-way' && 'border-b-2 border-blue-950' } text-blue-950`}>One Way Traiff</h3>
            <h3 onClick={()=>setTraiff('roundtrip')} className={`${traiff === 'roundtrip' && 'border-b-2 border-blue-950' } text-blue-950`} >Roundtrip Traiff</h3>
          </div>
          <div  className=" flex space-x-5 items-center justify-center text-center mt-5">
          <button onClick={() =>handleEditMode('add')} className={`${editMode === 'add' && 'hidden'} bg-teal-500 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>add</button>
          <button onClick={() =>handleEditMode('update')} className={`${editMode === 'update' && 'hidden'} bg-purple-600 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>update</button>
          <button onClick={() =>handleEditMode('remove')} className={`${editMode === 'remove' && 'hidden'} bg-red-500 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>remove</button>

          </div>
          <div className="border-2 border-gray-300  rounded-lg py-8 mx-5 mt-5 ">
            <form className="flex flex-col items-center ">
              <div className="text-xl flex sm:flex-col ">
                <label htmlFor="vehicle-type">Veichle Type:</label>
                <input type='text' name='vehicle-type' placeholder='Vehicle type' className="bg-gray-100 rounded-lg border-2" />
              </div>
              {
                editMode === 'remove' ||
                 <>
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
                </> 
              }
              <button className={`${handleEditModeColor(editMode)} w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>{editMode}</button>
            </form>
          </div>
          {/* <div className="text-center flex space-x-5 items-center justify-center mt-5">
          <button  onClick={() =>handleEditMode('update')} className="bg-purple-700 w-40  text-center p-3 rounded-lg uppercase font-bold text-white">{editMode === 'update' ? 'add' : 'update'}</button>
          <button onClick={() =>handleEditMode('remove')} className="bg-red-500 w-40 text-center p-3 rounded-lg uppercase font-bold text-white">{editMode === 'remove' ? 'add' : 'remove'}</button>
          </div> */}
        
        </div>
    </section>
  )
}

export default TraiffDetails