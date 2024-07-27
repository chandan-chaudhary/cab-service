import BookingCard from "./BookingCard";


const BookingDetails = () => {

    return (
        <section>
            <div className='bg-gray-100 text-blue-950 px-5 py-12 '>
                <div className='flex items-center pt-5'>
                    <h3 className='text-xl font-bold uppercase'>Bookings </h3>
                </div>

                {/* ASSIGN CAB DETAILS */}
                <div className="grid lg:grid-cols-2 gap-5">
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard /> 
                </div>
                {/* assign another  */}
                {/* <div className='flex flex-col border-2 border-gray-300 bg-white rounded-lg space-y-6 p-5 my-5'>
                    <div className='flex flex-col  '>
                        <div className="flex justify-between">
                            <p className="uppercase">sedan </p>
                            <p><span className={`uppercase font-bold ${handleAssignCab(assignCab)}`}>{assignCab}</span></p>
                        </div>
                        <p>outstation | one-way</p>
                        <p>4 Seats </p>
                        <p>Pickup Date: 12/12/12</p>
                    </div>
                    <div className='flex items-center justify-between space-x-10 '>
                        <div>
                            <p>Travler's Details</p>
                            <div className="flex flex-col font-bold pt-2">
                                <p>chandan </p>
                                <p className=""> 6200000000 </p>
                            </div>
                            <p> chandan@hotmail.com</p>
                            <p>patna to raipur</p>
                        </div>
                        {
                            assignCab === 'canceled' ? <RiDeleteBin5Line className="text-4xl" /> :
                                <div className="flex flex-col space-y-2 ">
                                    <button onClick={() => setAssignCab('confirmed')} className={`p-2 rounded-lg font-semibold border-2 border-green-500 text-green-500 ${assignCab === 'confirmed' && 'hidden'}`}>confirm</button>
                                    <button onClick={() => setAssignCab('canceled')} className="p-2 rounded-lg font-semibold border-2 border-red-500 text-red-500">cancel</button>
                                </div>
                        }
                    </div>
                </div> */}
            </div>

        </section>
    )
}
export default BookingDetails;