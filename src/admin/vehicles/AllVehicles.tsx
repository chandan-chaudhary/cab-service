

// import React from 'react'
import {selectCab} from "../../selectCab/selectCab";


function AllVehicles() {
  return (
    <div>
          <div
                className={'relative  md:grid md:grid-cols-2 md:gap-y-10 place-items-center text-blue-950 sm:px-3 bg-gray-100 mx-auto xl:px-44 pt-24'}>
                {selectCab.map((cab, idx)=>
                    <div key={idx} className="flex space-x-10 xl:space-x-36 bg-white sm:max-md:items-center w-fit pb-5 mb-5 justify-center mx-1 px-2 md:px-5  lg:max-xl:w-10/12 md:w-11/12">
                            <div className={''}>
                                <img src={cab.cabPic} alt={'cabPic'} className={'lg:w-40'}/>
                                <div className={'flex flex-col mt-5'}>
                                    <div className={'flex space-x-5 items-center'}>
                                        <h3 className={'uppercase font-bold font-kanit text-blue-700'}>{cab.cabName}</h3>
                                        <h5 className={'uppercase font-bold'}>{cab.vehicleType}</h5>
                                    </div>
                                    <div className={'flex space-x-5 font-bold text-sm'}>
                                        <h5>{cab.seats} seats | {cab.airCondition ? 'AC' : 'Non-AC'}</h5>
                                        <h5 ><span className={'text-blue-700'}>Rs. {cab.price_Km}</span> per KM</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <div className={'flex flex-col items-center justify-end font-bold space-y-3'}>
                                <h5 className={'text-xl'}>Rs. {cab.totalFare}</h5>
                                <a href={'/fair-detail'} className={'underline font-normal text-red-400'}>fair details</a>
                                <button onClick={() => {
                                    setShowBooking(true); setCabInfo({cabName: cab.cabName, cabPrice: cab.totalFare});
                                }} className={'bg-yellow-500 uppercase p-3 font-bold rounded-lg'}>select cab</button>
                            </div> */}
                    </div>
                )}
            </div>
    </div>
  )
}

export default AllVehicles