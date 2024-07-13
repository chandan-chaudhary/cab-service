import React, {useState} from 'react'


import bookingOption from "./bookingOption.ts";
import bookingRoute from "./bookingRoute.ts";

// IMAGES
import touristImg from '../assets/landingPage/tourist2.png';

const LandingPage:React.FC = () => {
 const [isSelected, setIsSelected] = useState<string>('outstation');
    const [isRoute, setIsRoute] = useState<string>('one-way');

    return(
        <div className={'flex flex-col items-center justify-center space-y-8 pt-8 pb-16 bg-gray-100 px-3 mx-auto w-screen'}>
            <div className={'flex flex-col items-center justify-center space-y-8 pt-8 pb-16 bg-gray-100 px-3'}>
                {/*TOP DIV*/}
                <div className={'px-3 text-blue-950'}>
                    <h5>For One Way Taxi Booking</h5>
                    <h1 className={'text-4xl font-bold font-kanit'}>Book your taxi online</h1>
                    <div className={'flex justify-around pt-7 text-center items-center'}>
                        <h4 className={'bg-blue-900  rounded-lg p-3 text-white'}>(+91)-0000000000</h4>
                        <h4  className={'bg-yellow-400 rounded-lg p-3'}>chat with us</h4>
                    </div>
                </div>
                {/*BOOKING STATUS*/}
                <div className={' grid grid-cols-4 items-center justify-center '}>
                    {bookingOption.map((booking, i) =>
                            <div key={i} onClick={() => {setIsSelected(booking.bookingType)}} className={`flex flex-col p-3 m-1 text-center items-center rounded-xl uppercase text-blue-950 space-y-2 ${booking.bookingType === isSelected && 'bg-yellow-400'} `}>
                                <booking.bookIcon className={`text-2xl `}/>
                                <span className={'text-[10px] font-bold'}>{booking.bookingType}</span>
                            </div>
                    )}
                </div>
                {/*ROUTE*/}
                <div className={'flex space-x-5 font-bold  uppercase text-black'}>
                        {
                            bookingRoute.map((route, i) =>
                                <span key={i} onClick={() => setIsRoute(route.route)}
                                      className={`${route.route === isRoute && 'border-b-4 border-blue-900'} pb-2`}>{route.route}</span>
                            )
                        }
                    </div>

                {/*BOOKING FORM*/}
                <div className={''}>
                        <div className={'flex flex-col bg-blue-900 px-5 mt-8 space-y-4 py-5 border-t-4 border-orange-500'}>
                        <div className={'text-2xl text-white font-bold pb-6'}>
                            <h2>Book Your {isRoute} Taxi</h2>
                        </div>
                        <div className={'flex flex-col w-full'}>
                            <label htmlFor={'pickup city'}>PickUp Address</label>
                            <input type={'text'} name={'pickup city'} placeholder={'Source city'}
                                   className={'p-2 pt-3 outline-none bg-white text-black'}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <label htmlFor={'destination city'}>Drop Address</label>
                            <input type={'text'} placeholder={'Drop location'} name={'destination city'} className={'p-2 pt-3 outline-none bg-white text-black'}/>
                        </div>
                        {/*MULTICITY DIV*/}
                        {/* DATE AND TIME SELECTION*/}
                        {/*<div className={'w-full flex flex-col text-black px-3 text-center pb-5 bg-blue-700'}>*/}
                        <div className={'flex flex-col'}>
                            <label htmlFor={'start date'}>PickUp Date</label>
                            <input type={'date'} placeholder={'start date'} name={'start date'} className={'p-2  outline-none bg-white text-black'}/>
                        </div>
                        {/*<div className={'h-0.5 w-full bg-gray-200'}></div>*/}
                        <div className={`${isRoute != 'one-way' ? '' : 'hidden'} flex flex-col`}>
                            <label htmlFor={'end date'}>Drop Date</label>
                            <input type={'date'} placeholder={'end date'} name={'end date'}
                               className={`p-2 pt-3 outline-none bg-white text-black`}/>
                        </div>
                        {/*<div className={`h-0.5 w-full bg-gray-200 ${isRoute != 'one-way' ? '' : 'hidden'}`}></div>*/}
                        <div className={'flex flex-col'}>
                            <label htmlFor={'pickup time'}>PickUp Time</label>
                            <input type={'time'} placeholder={'start time'} name={'pickup time'} className={'p-2 pt-3 outline-none bg-white text-black'}/>
                        </div>
                        <button className={'bg-orange-400 uppercase p-2 font-bold text-center text-white'}>search cab
                        </button>
                    </div>
                    </div>
            </div>
            <div>
                <img src={touristImg} alt={'tourist img'} className={''} />
            </div>
        </div>
    )
};

export default LandingPage;