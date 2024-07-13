import React, {useState} from 'react';
import offerInfo from "./offter.ts";
import { GoDotFill } from "react-icons/go";

const Offer:React.FC =()=>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const handleOffer = (i:number) =>{
        setCurrentIndex(i);
    };
    return(
        <section>
            <div className={'bg-gray-100  py-12'}>
                <div className={'font-kanit font-bold text-center text-blue-950'}>
                    <h2 className={'text-2xl'}>Special Discounted Drop Routes</h2>
                    <p>Book Now & Save More</p>
                </div>
                <div className={'bg-gray-100  py-12 tra'}>
                {/*{*/}
                {/*    // offerInfo.map((offer, i) =>*/}
                        <div className={'flex flex-col mx-4 p-3 items-center space-y-4 text-black bg-white rounded-2xl shadow-2xl mt-5'}>
                            <h2 className={'text-2xl font-bold'}>{offerInfo[currentIndex].route}</h2>
                            <h1 className={'text-blue-500 font-bold text-4xl '}>₹{offerInfo[currentIndex].price}</h1>
                            <ul className={'text-black list-disc text-xl '}>
                                <li>car type: {offerInfo[currentIndex].vehicleType}</li>
                                <li>Total KM(covered): {offerInfo[currentIndex].totalKM}KM</li>
                                <li>Extra Rate Per KM: {offerInfo[currentIndex].extraRate}</li>
                                <li>{offerInfo[0].otherCharges}</li>
                            </ul>
                        </div>
                {/*    // )*/}
                {/*// }*/}
                </div>
                <div className={'flex flex-row justify-center space-x-3'}>
                {

                    offerInfo.map((offer, i) =>
                    <div key={i} onClick={() => handleOffer(i)} className={'text-black text-xl'}>
                        <GoDotFill />
                        <span className={'hidden'}>{offer.route}</span>
                    </div>
                    )
                }
                </div>
            </div>
        </section>
    )
}
export default Offer;