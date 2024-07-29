// import React from 'react'

import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
// import { bookingRouteState } from "../../redux/bookingSlice";
// import type { AppDispatch, AppStore, RootState } from './store'

import bookingOption from "../../landingPage/bookingOption";
import { outstationRoute, transferRoute, localRoute, dealRoute } from "../../landingPage/bookingRoute";
import store from "../../redux/store";
import { BookingRouteProps, bookingRouteState } from "../../redux/bookingSlice";
// types IN REDUX
type RootState = ReturnType<typeof store.getState>;
type useDispatch = typeof store.dispatch;

function RouteManager() {
  // let bookingRoutes :BookingRouteProps[] = [];

  const [isON, setIsON] = useState<boolean>(false);

  const booking  = useSelector((state:RootState )=> state.bookingRoute.bookingRoute);
  const setBooking  = useDispatch<useDispatch>();
  
    const handleBookingState = (route:string)=>{
      // setIsON(!isON);
      //  const bookObj = {[route]: false}
      // bookingRoutes.push({ [route]: false})
      setBooking(bookingRouteState({[route]:isON}))
    // console.log(bookingRoutes, 'route');
    };
    console.log(booking[0], 'redux');

    

  return (
    <section>
      <div className=" flex flex-col gap-y-5 justify-center items-center bg-gray-200 text-black mx-auto py-24 ">
        <h4 className="text-xl uppercase font-bold">manage routes</h4>
        <div className="grid sm:grid-cols-1 grid-cols-4 ">
          {/* BOOKING ROUTE */}
            {
              bookingOption.map((bookingRoute, idx) =>
                <div key={idx} className="mx-4 bg-white p-8 rounded-lg border-b-4 border-blue-900 sm:mb-8 ">
                  <div className=" flex space-x-12 items-center justify-between border-b-2 border-gray-400 py-2">
                    <h4 className="text-lg uppercase font-semibold">{bookingRoute.bookingType}</h4>
                    <div onClick={() => {handleBookingState(bookingRoute.bookingType)}} className={` ${isON ? 'bg-blue-900' : 'bg-gray-600'} h-6 w-16 rounded-full transition-all duration-500 `}>
                      <div className={` h-6 w-6 rounded-full bg-white  ${isON && 'ml-11 bg-blue-500'} transition-all duration-500`} />
                    </div>
                  </div>
                  {/* OUTSTATION */}
                  {
                    (bookingRoute.bookingType) === 'outstation' && outstationRoute.map((route, idx) =>
                      <div key={idx} className="py-2">
                        <div className=" flex space-x-12 justify-between items-center ">
                          <h4 className="uppercase font-semibold">{route.route}</h4>
                          <div onClick={() => setIsON(!isON)} className={` ${isON ? 'bg-blue-900' : ' bg-gray-600'} h-6 w-16 rounded-full transition-all duration-500 `}>
                            <div className={` h-6 w-6 rounded-full bg-white  ${isON && 'ml-11 bg-blue-500'} transition-all duration-500`} />
                          </div>
                        </div>
                      </div>
                    )}
                  {/* LOCAL ROUTE */}
                  {
                    (bookingRoute.bookingType) === 'local' && localRoute.map((route, idx) =>
                      <div key={idx} className="py-2">
                        <div className=" flex space-x-12 justify-between">
                          <h4  className="uppercase font-semibold">{route.route}</h4>
                          <div onClick={() => setIsON(!isON)} className={` ${isON ? 'bg-blue-900' : ' bg-gray-600'} h-6 w-16 rounded-full transition-all duration-500 `}>
                            <div className={` h-6 w-6 rounded-full bg-white  ${isON && 'ml-11  bg-blue-500'} transition-all duration-500`} />
                          </div>
                        </div>
                      </div>
                    )}
                  {/* LOCAL ROUTE */}
                  {
                    (bookingRoute.bookingType) === 'transfer' && transferRoute.map((route, idx) =>
                      <div key={idx} className="py-2">
                        <div className=" flex space-x-12 justify-between ">
                          <h4  className="uppercase font-semibold">{route.route}</h4>
                          <div onClick={() => setIsON(!isON)} className={` ${isON ? 'bg-blue-900' : ' bg-gray-600'} h-6 w-16 rounded-full transition-all duration-500 `}>
                            <div className={` h-6 w-6 rounded-full bg-white  ${isON && 'ml-11 bg-blue-500'} transition-all duration-500`} />
                          </div>
                        </div>
                      </div>
                    )}
                  {/* LOCAL ROUTE */}
                  {
                    (bookingRoute.bookingType) === 'deal' && dealRoute.map((route, idx) =>
                      <div key={idx} className="py-2">
                        <div className=" flex space-x-12 justify-between">
                          <h4 className="uppercase font-semibold">{route.route}</h4>
                          <div onClick={() => setIsON(!isON)} className={` ${isON ? 'bg-blue-900' : ' bg-gray-600'} h-6 w-16 rounded-full transition-all duration-500 `}>
                            <div className={` h-6 w-6 rounded-full bg-white  ${isON && 'ml-11 bg-blue-500'}  transition-all duration-500`} />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              )}
          </div>

        </div>
      {/* </div> */}
    </section>
  )
}

export default RouteManager;