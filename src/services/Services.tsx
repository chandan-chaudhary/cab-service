import React from 'react';
import { FaTaxi } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const Services:React.FC= () => {
    return(
        <section>
            <div className={'flex flex-col text-white bg-blue-950 px-7 pb-12 md:pl-24'}>
                <div className={'flex flex-row mt-7'}>
                    <FaTaxi className={'text-8xl '}/>
                    <div className={'ml-8'}>
                        <h1 className={'text-2xl font-bold '}>Drop Taxi Service</h1>
                        <p className={'mt-3'}>One Way Taxi Round Trip Taxi Airport Pickup & Drop Taxi</p>
                    </div>
                </div>
                <div className={'flex flex-row mt-7'}>
                    <GiTakeMyMoney  className={'text-8xl '}/>
                    <div className={'ml-8  '}>
                        <h1 className={'text-2xl font-bold'}>Lowest Taxi Fare</h1>
                        <span className={'mt-3'}>Save 40% on One Way Brand New Cabs Sanitized Taxi Cabs</span>
                    </div>
                </div>
                <div className={'flex flex-row mt-7'}>
                <FaHandHoldingHeart  className={'text-8xl '}/>
                    <div  className={'ml-8  '}>
                        <h1 className={'text-2xl font-bold'}>24x7 Available</h1>
                        <span className={'mt-3'}>On Call support GPS Tracking Well Mannered Drivers</span>
                    </div>
                </div>
                <div className={'flex flex-row mt-7 '}>
                    <MdSupportAgent  className={'text-8xl '}/>
                    <div className={' ml-8'}>
                        <h1 className={'text-2xl font-bold'}>100%</h1>
                        <span className={'mt-3'}>Satisfaction rate</span>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Services;