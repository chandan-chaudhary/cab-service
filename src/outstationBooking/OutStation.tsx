
import React from "react";

import outStation from "./outStation.ts";

const OutStation: React.FC =() =>{
    return(
        <section className={'bg-gray-100  py-10'}>
            <div className={' text-blue-950 text-center py-7'}>
                <h3 className={'text-3xl font-bold'}>OutStation Taxi Service</h3>
                <p className={'pt-2'}>get benefits and more with excellent service</p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-5 md:gap-y-8 items-center justify-center  text-blue-950 sm:max-md:space-y-12 px-12'}>
                {
                 outStation.map((location, idx) =>
                 <div key={idx} className={'bg-white '}>
                     <img src={location.image} alt={'location-img'} />
                     <h3 className={' text-2xl font-bold font-kanit py-7 '}>{location.bookFor} Drop Taxi</h3>
                 </div>
                 )
                }
            </div>
        </section>
    )
};

export default OutStation;