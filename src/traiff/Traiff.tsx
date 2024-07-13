
import React from 'react';
import vehicleInfo from "./traiff.ts";
import {traiffData} from "./traiff.ts";
const Traiff :React.FC= () => {
    return(
        <section>
            <div className={'flex flex-col  bg-gray-100 px-2 py-20'}>
                {/*ONE WAY TRAIFF*/}
                <div>
                    <h1 className={'text-3xl font-bold text-black pb-3'}>One Way Traiff</h1>
                    <table className={'border-2 border-slate-300 text-center '}>
                        <thead>
                        <tr className={'border-2 border-slate-300 text-white'}>
                            {
                                traiffData.map((traiff, i) =>
                                    <th key={i} className={'bg-blue-900 border-x-2 border-white'}>{traiff}</th>
                                )
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            vehicleInfo.map((vehicle, i) =>
                                <tr key={i} className={'border-2 border-slate-300 text-gray-700'}>
                                    <td className={'border-2 border-slate-300 uppercase p-2 '}>{vehicle.vehicleName}</td>
                                    <td className={'border-2 border-slate-300 p-2 '}>₹{vehicle.price}/KM</td>
                                    <td className={'border-2 border-slate-300 p-2 '}>₹{vehicle.driverBata}</td>
                                    <td className={'border-2 border-slate-300 p-2 '}>{vehicle.additionalCharge}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                {/*ROUNDTRIP TRAIFF*/}
                <div className={'pt-16'}>
                    <h1 className={'text-3xl font-bold text-black pb-3'}>RoundTrip Traiff</h1>
                    <table className={'border-2 border-slate-300 text-center'}>
                        <thead>
                        <tr className={'border-2 border-slate-300 text-white '}>
                            {
                                traiffData.map((traiff, i) =>
                                    <th key={i} className={'bg-blue-900 border-x-2 border-white'}>{traiff}</th>
                                )
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            vehicleInfo.map((vehicle, i) =>
                                <tr key={i} className={'border-2 border-slate-300 text-gray-700'}>
                                    <td className={'border-2 border-slate-300 uppercase p-2'}>{vehicle.vehicleName}</td>
                                    <td className={'border-2 border-slate-300 p-2'}>₹{vehicle.price}/KM</td>
                                    <td className={'border-2 border-slate-300 p-2'}>₹{vehicle.driverBata}</td>
                                    <td className={'border-2 border-slate-300 p-2'}>{vehicle.additionalCharge}</td>
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