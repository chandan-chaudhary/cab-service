// import React from 'react'

function TaxiDetails() {
    return (
        <section>
            <div className=' bg-white text-blue-950 p-4 my-12 py-10 border-b-4 border-blue-950 rounded-lg  mx-4 '>
                <h4 className="text-2xl text-center font-bold font-kanit pb-5">Trip Details</h4>
                <div className='flex flex-col gap-y-4 p-3'>
                    <div className='flex justify-between gap-x-5'>
                        <h6 className="text-gray-700 font-bold">Vehicle:</h6>
                        <p className='text-blue-800 font-bold'>Tata indica , Ac</p>
                    </div>
                    <div className='flex justify-between gap-x-5'>
                         <h6 className="text-gray-700 font-bold">Route:</h6>
                         <div className='text-blue-800 font-bold text-end'>
                            <p >Outstation (oneway)</p>
                            <p> patna __ raipur</p>
                         </div>
                    </div>
                    <div className='flex justify-between gap-x-5'>
                         <h6 className="text-gray-700 font-bold">Date & Time:</h6>
                         <div className='text-blue-800 font-bold text-end'>
                            <p >27-jul-2024 | 20:12</p>
                            <p> 1 cab(s)</p>
                         </div>
                    </div>
                    <div className='flex justify-between items-center gap-x-5'>
                        < h6 className="text-gray-700 font-bold">Approx Oneway Distance:</h6>
                        <p className='text-blue-800 font-bold text-end'>= 1200 km * 13.0 rs/km</p>
                    </div>
                    <div className='flex justify-between  items-center gap-x-5'>
                    <h6 className="text-gray-700 font-bold">Approx Leftover Distance:</h6>
                        <p className='text-blue-800 font-bold text-end'>= 1200 km * 13.0 rs/km</p>
                    </div>
                    <div className='flex  justify-between items-center gap-x-5'>
                        <h6 className="text-gray-700 font-bold">Drivers Allowwance:</h6>
                        <p className='text-blue-800 font-bold text-end'>= Rs 500 * 4 Days </p>
                    </div>
                    <div className='flex justify-between items-center gap-x-5'>
                         <h6 className="text-gray-700 font-bold">Gst:</h6>
                        <p className='text-blue-800 font-bold text-end'>5% of 19000 = Rs 971 /-</p>
                    </div>
                    {/* BORDER */}
                    <div className='w-full h-0.5 bg-gray-400'></div>

                    <div className='flex justify-between  items-center gap-x-5'>
                        <h6 className="text-gray-700 font-bold">Total Cost</h6>
                        <p className='text-blue-800 font-bold'>19000 /-</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 p-3">
                    <div className='flex justify-between items-center gap-x-5'>
                        <h6 className="text-gray-700 font-bold">you are paying: </h6>
                        <p className='text-blue-800 font-bold'>4000 /-</p>
                    </div>
                    {/* BORDER */}
                    <div className='w-full h-0.5 bg-gray-400'></div>

                    <div className='flex justify-between gap-x-5'>
                        <h6 className="text-gray-700 font-bold">Amount to Pay: </h6>
                        <p className='text-blue-800 font-bold'>15000 /-</p>
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default TaxiDetails