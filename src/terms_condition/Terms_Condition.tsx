import React from 'react'

import {terms_Conditions} from "./sedan.ts";

const Terms_Condition : React.FC= () => {
    return(
        <section className={'text-black bg-gray-100 px-5 pb-12 '}>
            <div className={'flex flex-col text-blue-950 space-y-5'}>
                <div className={'text-xl'}>Terms and conditions </div>
                <div>
                    <h3 className={'text-4xl font-bold font-kanit'}>Points before ur travel</h3>
                    <div className={'mt-5'}>
                        <h5 className={'text-2xl font-kanit font-bold'}>Any Sedan</h5>
                        <p className={'text-gray-700'}>Swift Dzire Toyota Etios Tata Zest Hyundai Xcent Nissan sunny anyone will be
                            assigned</p>
                        {/*{*/}
                        {/*    sedanType.map((sedan, idx) =>*/}
                        {/*        <div className={''}>*/}
                        {/*            <li key={idx} className={'text-sm list-none text'}>{sedan}</li>*/}
                        {/*        </div>*/}
                        {/*    )}*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        <h5 className={'text-2xl font-kanit font-bold mt-4'}>Any Suv</h5>
                        <p className={'text-gray-700'}>Swift Dzire Toyota Etios Tata Zest Hyundai Xcent Nissan sunny anyone will be
                            assigned</p>
                        {/*{*/}
                        {/*    suvType.map((suv, idx) =>*/}
                        {/*        <p key={idx}>{suv}</p>*/}
                        {/*    )*/}
                        {/*}*/}
                    </div>
                    <div className={'mt-5'}>
                        {
                            terms_Conditions.map((term, idx) =>
                                <div key={idx} className={'flex'}>
                                    <li  className={'text-gray-600'} />
                                    <p className={'text-gray-700 mr-8 '}>{term}</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Terms_Condition;