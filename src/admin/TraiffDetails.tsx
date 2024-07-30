

// import React from 'react'

import { ChangeEvent, FormEvent, useState } from "react"
import Traiff from '../traiff/Traiff';
import { TraiffDetailProps } from "../traiff/traiff";



function TraiffDetails() {
const [traiff, setTraiff] = useState<string>('one-way');
const [editMode, setEditMode] = useState<string>('');
const [traiffData, setTraiffData] = useState<TraiffDetailProps>({
  vehicleType: '',
  ratePerKM: '',
  driverBata: '',
  additionalCharge: '',
});

// HANDLE EDIT MODE
 const handleEditMode = (mode:string)=>{
    setEditMode(mode);
};

// CAHNGES COLOR ACCORDING TO EDIT-MODE BUTTON
const handleEditModeColor= (mode:string) =>{
  if(mode === 'add')  return 'bg-teal-500';
  if(mode === 'update')  return 'bg-purple-600';
  if(mode === 'remove')  return 'bg-red-500';
}

// HANDLE FORM SUBMIT
const handleFormSubmit = (event: FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  console.log(traiffData);
  traiffData.vehicleType= '';
};

// HANDLE INPUT CHANGE
const HandleOnChange = (event:ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
       setTraiffData({
        ...traiffData,
        [event.target.name]: event.target.value
       })
}

  return (
    <section className="">
      <div className='flex flex-col items-center bg-gray-100 text-blue-950 py-16 pb-44 '>
          {/* TRAIFF */}
            <div>
                <Traiff />
            </div>
          {/* TRAIFF MODIFICATION FORM */}
          <div className={` ${editMode === '' && 'hidden'} bg-white  rounded-lg py-8 mt-5 mx-5 md:w-6/12 lg:w-5/12 border-b-4 border-blue-950 `}>
            <div className="flex flex-row text-lg space-x-5 font-bold  items-center justify-center">
              <h3 onClick={()=>setTraiff('one-way') } className={`${traiff === 'one-way' && 'border-b-2 border-blue-950' } text-blue-950  text-2xl`}>One Way</h3>
              <h3 onClick={()=>setTraiff('roundtrip')} className={`${traiff === 'roundtrip' && 'border-b-2 border-blue-950' } text-blue-950 text-2xl`} >Roundtrip</h3>
            </div>
            <form className="flex flex-col items-center py-8 space-y-4 sm:px-5 lg:px-10 " onSubmit={(e) => handleFormSubmit(e)}>
              <div className="text-xl flex sm:flex-col w-full  ">
                <label htmlFor="vehicle-type" className="text-lg">Veichle Type:</label>
                <input type='text' name='vehicleType' value={traiffData.vehicleType} placeholder='Vehicle type' className="bg-gray-100 rounded-lg border-2 pl-5" onChange={(e)=> HandleOnChange(e)} />
              </div>

              {/* EDITMODE === REMOVE */}
              {
                editMode === 'remove' ||
                 <>
                  <div className="text-xl flex  sm:flex-col justify-between w-full ">
                  <label htmlFor="rate"  className="text-lg">Rate (per KM):</label>
                  <input type='number' name='ratePerKM' value={traiffData.ratePerKM} placeholder='rate/KM'   className="bg-gray-100 rounded-lg border-2 pl-5 " onChange={(e)=> HandleOnChange(e)} />
                  </div>
                  <div className="text-xl flex  sm:flex-col  justify-between w-full ">
                  <label htmlFor="driver-bata"  className="text-lg">Driver Bata:</label>
                  <input type='number' name='driverBata' value={traiffData.driverBata} placeholder='eg: ₹300'  className="bg-gray-100 rounded-lg border-2  pl-5" onChange={(e)=> HandleOnChange(e)}/>
                  </div>
                  <div className="text-xl flex  sm:flex-col justify-between w-full">
                  <label htmlFor="extra-charge"  className="text-lg">Additional Charges:</label>
                  <input type='number' name='additionalCharge' value={traiffData.additionalCharge} placeholder='eg: ₹500'   className="bg-gray-100 rounded-lg border-2 pl-5" onChange={(e)=> HandleOnChange(e)}/>
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