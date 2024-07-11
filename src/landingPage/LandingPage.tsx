import React, {useState} from 'react'


import bookingOption from "./bookingOption.ts";
import bookingRoute from "./bookingRoute.ts";

const LandingPage:React.FC = () => {
 const [isSelected, setIsSelected] = useState<string>('outstation');
    const [isRoute, setIsRoute] = useState<string>('one-way');

 const handleIsSelected = (booking:string)=>{
     return setIsSelected(booking);
 }
    return(
        <div className={'flex flex-col items-center justify-center space-y-8 pt-8 text-center bg-gradient-to-bl from-green-400 to-blue-600'}>
            <div className={'px-3'}>
                <h1 className={'text-3xl font-bold'}>Your Safety Matters To us. </h1>
                <h3 className={'text-xl font-bold'}>100% Sanitized | Safe | Reliable cab.</h3>
            </div>
            <div className={'   grid grid-cols-4 items-center justify-center px-2  '}>
                {bookingOption.map((booking, i) =>
                    // <div>
                        <div key={i} onClick={() => handleIsSelected(booking.bookingType)} className={`flex flex-col p-3 m-1 text-center items-center rounded-xl uppercase text-white space-y-2 ${booking.bookingType === isSelected ?  'bg-orange-400' : ''} `}>
                            <booking.bookIcon className={'text-2xl'}/>
                            <span className={'text-[10px] font-bold'}>{booking.bookingType}</span>
                        </div>
                    // </div>
                )}
            </div>
            <div className={'flex flex-col  items-center justify-center '}>
                <div className={'flex space-x-5 font-bold  uppercase text-white'}>
                    {
                        bookingRoute.map((route, i) =>
                            <span key={i} onClick={() => setIsRoute(route.route)}
                                  className={`${route.route === isRoute && 'border-b-4'} pb-2`}>{route.route}</span>
                        )
                    }
                </div>

                {/*BOOKING FORM*/}
                <div className={'w-full flex flex-col text-black bg-white p-3 text-center mt-8'}>
                    <input type={'text'} placeholder={'Source city'} className={'p-2 pt-3 outline-none bg-white'}/>
                    <div className={'h-0.5 w-full bg-gray-200'}></div>
                    <input type={'text'} placeholder={'Destination City'} className={'p-2 pt-3 outline-none bg-white'}/>
                    <div className={'h-0.5 w-full bg-gray-200'}></div>

                </div>

                {/*MULTICITY DIV*/}
                <div className={`h-3 w-5 bg-transparent rounded-full ${isRoute === 'multicity' ? '' : 'hidden'}`}>a</div>

                {/* DATE AND TIME SELECTION*/}
                <div className={'w-full flex flex-col text-black bg-white px-3 text-center'}>
                    <input type={'date'} placeholder={'start date'} className={'p-2  outline-none bg-white'}/>
                    <div className={'h-0.5 w-full bg-gray-200'}></div>
                    <input type={'date'} placeholder={'end date'}
                           className={`p-2 pt-3 outline-none bg-white ${isRoute != 'one-way' ? '' : 'hidden'}`}/>
                    <div className={`h-0.5 w-full bg-gray-200 ${isRoute != 'one-way' ? '' : 'hidden'}`}></div>

                    <input type={'time'} placeholder={'start time'} className={'p-2 pt-3 outline-none bg-white'}/>
                    <div className={'h-0.5 w-full bg-gray-200'}></div>

                    <button className={'bg-orange-400 uppercase p-2 font-bold text-center text-white'}>search cab
                    </button>
                </div>

            </div>
        </div>
    )
};

export default LandingPage;