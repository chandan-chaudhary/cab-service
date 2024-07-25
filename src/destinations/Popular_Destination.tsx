
import React from "react";

import outStation from "../outstationBooking/outStation.ts";

const PopularDestination: React.FC =() =>{
    return(
        <section className={'bg-gray-100 py-10'}>
            <div className={' text-blue-950 text-center py-7'}>
                <h3 className={'text-3xl font-bold'}>Find popular outstation taxi destinations</h3>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-5 md:gap-y-8 justify-between  text-blue-950 md:px-12 sm:max-md:space-y-12'}>
                {
                    outStation.map((location, idx) =>
                        <div key={idx} className={'bg-white '}>
                            <img src={location.image} alt={'location-img'} />
                            <h3 className={' text-2xl font-bold font-kanit pt-7 pb-4 px-4'}>{location.bookFor} Drop Taxi</h3>
                            <button className={'bg-blue-800 p-3 text-white ml-5 mb-5'}>call now</button>
                        </div>
                    )
                }
            </div>
        </section>
    )
};

export default PopularDestination;