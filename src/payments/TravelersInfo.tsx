// import React from 'react'

import React, { useState } from "react"

interface TravelersInfo {
    fullname: string,
    contact: bigint,
    email: string,
    pickup_Address: string,
    pincode: number,
}

function TravelersInfo() {

    const [travellersData, setTravellersData] = useState<TravelersInfo>({
            fullname: '',
            contact: 0n,
            email: '',
            pickup_Address: '',
            pincode: 123456
    })

    const handleTravllersData = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(travellersData);
        
    }

    const handleInputDataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, ) =>{
            setTravellersData({...travellersData,[event.target.name] : event.target.value })
    }
    // console.log(travellersData);
    
    return (
        <section className="pt-24">
            <div className='flex flex-col gap-4 justify-center items-center bg-white text-blue-950 p-5 rounded-lg border-b-4 border-blue-900 mx-4 '>
                <h4 className="text-2xl font-bold font-kanit">Travellers Detail</h4>
                <div>
                    {/*TRAVELLERS DATA*/}
                    <form  className=" flex flex-col lg:columns-2 gap-y-2 w-72 lg:w-96" onSubmit={(e) =>handleTravllersData(e)}>
                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="full-address" className="text-lg font-semibold uppercase">full Name</label>
                            <input   type='text' name='fullname' placeholder='Full Address' className='border-2 border-gray-300 bg-white outline-none p-1 rounded-lg sm:h-12' value={travellersData.fullname} onChange={(e) => handleInputDataChange(e)} />
                        </div>
                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="contact" className="text-lg font-semibold uppercase">contact</label>
                            <input required type='number' name='contact' placeholder='Contact' className='border-2 border-gray-300 bg-white outline-none p-1 rounded-lg sm:h-12' onChange={(e) => handleInputDataChange(e)}/>
                        </div>
                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="email" className="text-lg font-semibold uppercase">email</label>
                            <input required type='email' name='email' placeholder='Email' className='border-2 border-gray-300 bg-white outline-none p-1 rounded-lg sm:h-12' onChange={(e) => handleInputDataChange(e)}/>
                        </div>
                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="full-address" className="text-lg font-semibold uppercase">pickup address</label>
                            {
                                window.screen.availWidth >= 768 ?
                                    <input required type='text' name='pickup_Address' placeholder='Full Address' className='border-2 border-gray-300 bg-white outline-none p-1 rounded-lg sm:h-12 ' onChange={(e) => handleInputDataChange(e)}/>
                                    :
                                    <textarea required autoFocus rows={3} name="pickup_Address" placeholder="full Address" className="uppercase border-2 border-gray-300 rounded-lg bg-white p-2" onChange={(e) => handleInputDataChange(e)}/>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="pincode" className="text-lg font-semibold uppercase">Pincode</label>
                            <input required type='number' name='pincode' placeholder='Pincode' className='border-2 border-gray-300 bg-white  p-1 rounded-lg' onChange={(e) => handleInputDataChange(e)}/>
                        </div>
                        <div className="text-center py-5">
                            <button className="p-3 bg-blue-800 text-white text-center font-bold uppercase rounded-lg">continue</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default TravelersInfo