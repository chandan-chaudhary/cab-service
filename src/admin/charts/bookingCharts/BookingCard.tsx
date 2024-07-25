import {useState} from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";


function BookingCard() {
    const [assignCab, setAssignCab] = useState<string>('pending');
    const [showBooking, setShowBooking] = useState<boolean>(true);

    const handleAssignCab = (assigningType: string) => {
        if (assigningType === 'pending') return 'text-yellow-700 bg-yellow-300';
        if (assigningType === 'confirmed') return 'text-green-600 bg-green-300';
        if (assigningType === 'canceled') return 'text-red-500 bg-red-300';
    }

  return (
    <div>
          <div className={` ${showBooking ? '' : 'hidden'} flex flex-col border-2 border-gray-300 bg-white rounded-lg  my-5`}>
                    <div className='flex flex-col  '>
                        <div className="flex justify-between items-start border-b-4 border-dashed px-3 py-2">
                            <div className="">
                                <p className="font-bold text-xl uppercase">sedan </p>
                                <p className="text-gray-600 font-semibold">outstation | one-way | 4 Seats</p>
                            </div>
                            {/* {
                            assignCab ?  */}
                            <p className={`${handleAssignCab(assignCab)} rounded-full p-2 uppercase text-center font-semibold py-0`}><span className={``}>{assignCab}</span></p>
                            {/* :
                            <RiDeleteBin5Line onClick={() =>setShowBooking(false)}className="text-4xl"/> 
                        } */}
                        </div>
                        <div className="flex flex-col space-y-1 px-5 py-2">
                            <p className="text-xl font-bold uppercase ">city   ------------------------city</p>
                            <p>16/12 , 20:10</p>
                            <p><span className="font-bold ">₹ 25000</span></p>
                        </div>
                    </div>
                    <div className='flex items-end justify-between space-x-10 px-5 pb-3 '>
                        <div>
                            <div className="flex flex-col font-semibold pt-2">
                                <p>chandan,  6200000000  </p>
                                {/* <p className=""></p> */}
                                <p> chandan@hotmail.com</p>
                            </div>
                        </div>
                        {
                            assignCab === 'canceled' ? <RiDeleteBin5Line onClick={() => setShowBooking(false)} className="text-4xl" /> :
                                <div className="flex flex-col space-y-2 ">
                                    {
                                        assignCab === 'confirmed' ?
                                            <RiDeleteBin5Line onClick={() => setShowBooking(false)} className="text-4xl" />
                                            :
                                            <button onClick={() => setAssignCab('confirmed')} className={`p-1 rounded-lg font-semibold border-2 border-green-500 text-green-500 ${assignCab === 'confirmed' && 'hidden'}`}>confirm</button>


                                    }
                                    <button onClick={() => setAssignCab('canceled')} className="p-1 rounded-lg font-semibold border-2 border-red-500 text-red-500">cancel</button>
                                </div>
                        }
                    </div>
                </div>
    </div>
  )
}

export default BookingCard