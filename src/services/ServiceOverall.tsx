
import React from 'react'
import { FaBuilding } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";

const ServiceOverall: React.FC = () => {
    return (
        <section >
            <div className={'flex flex-col space-y-12 items-center text-center text-black bg-gradient-to-bl from-green-900 to-blue-950 pt-8'}>
                    <div className={'flex flex-col space-y-2.5 items-center text-center text-white '}>
                        <FaBuilding className={'text-4xl'}/>
                        <span className={'text-orange-400 text-3xl font-bold'}>300+</span>
                        <span className={''}>Indian Cities</span>
                    </div>
                    <div className={'flex flex-col space-y-2.5 items-center text-center text-white '}>
                        <FaUserLarge className={'text-4xl'}/>
                        <span className={'text-orange-400 text-3xl font-bold'}>5000+</span>
                        <span>Vendors</span>
                    </div>
                    <div className={'flex flex-col space-y-2 items-center text-center text-white '}>
                        <RiEmotionHappyLine className={'text-4xl'}/>
                        <span className={'text-orange-400 text-3xl font-bold'}>1,20,000+</span>
                        <span>customers</span>
                    </div>
            </div>
        </section>
    )
};

export default ServiceOverall;