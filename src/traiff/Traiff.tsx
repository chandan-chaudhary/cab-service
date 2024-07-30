
import React from 'react';
import vehicleInfo from "./traiff.ts";
import {traiffData} from "./traiff.ts";
const Traiff :React.FC= () => {
    return(
        <section>
            <div className={'flex flex-col xl:flex-row md:items-center justify-center lg:max-xl:space-y-16 xl:gap-x-10  bg-gray-100 py-20 px-5'}>
                {/*ONE WAY TRAIFF*/}
                <div className={''}>
                    <h1 className={'text-xl font-bold text-black pb-3'}>One Way Traiff</h1>
                    <table className={'border-2 border-slate-300 text-center '}>
                        <thead>
                        <tr className={'border-2 border-slate-300 text-white'}>
                            {
                                traiffData.map((traiff, i) =>
                                    <th key={i} className={'bg-blue-900 border-x-2 border-white md:p-8 xl:p-3 text-xl '}>{traiff}</th>
                                )
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            vehicleInfo.map((vehicle, i) =>
                                <tr key={i} className={'border-2 border-slate-300 text-gray-700'}>
                                    <td className={'border-2 border-slate-300 uppercase p-2 text-lg'}>{vehicle.vehicleType}</td>
                                    <td className={'border-2 border-slate-300 p-2 text-lg'}>₹{vehicle.ratePerKm}/KM</td>
                                    <td className={'border-2 border-slate-300 p-2 text-lg'}>₹{vehicle.driverBata}</td>
                                    <td className={'border-2 border-slate-300 p-2 text-lg'}>{vehicle.additionalCharge}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                {/*ROUNDTRIP TRAIFF*/}
                <div className={'sm:max-lg:pt-16'}>
                    <h1 className={'text-xl font-bold text-black pb-3'}>RoundTrip Traiff</h1>
                    <table className={'border-2 border-slate-300 text-center'}>
                        <thead>
                        <tr className={'border-2 border-slate-300 text-white '}>
                            {
                                traiffData.map((traiff, i) =>
                                    <th key={i} className={'bg-blue-900 border-x-2 border-white md:p-8 xl:p-3 xl:text-xl '}>{traiff}</th>
                                )
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            vehicleInfo.map((vehicle, i) =>
                                <tr key={i} className={'border-2 border-slate-300 text-gray-700'}>
                                    <td className={'border-2 border-slate-300 uppercase p-2 xl:text-lg'}>{vehicle.vehicleType}</td>
                                    <td className={'border-2 border-slate-300 p-2 xl:text-lg'}>₹{vehicle.ratePerKm}/KM</td>
                                    <td className={'border-2 border-slate-300 p-2 xl:text-lg'}>₹{vehicle.driverBata}</td>
                                    <td className={'border-2 border-slate-300 p-2 xl:text-lg'}>{vehicle.additionalCharge}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
};
export default Traiff;