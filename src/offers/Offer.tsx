import React, {useState} from 'react';
import offerInfo from "./offter.ts";
import { GoDotFill } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Offer:React.FC =()=>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const handleOffer = (i:number) =>{
        setCurrentIndex(i);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <section>
            <div className={'bg-gray-100  py-12'}>
                <div className={'font-kanit font-bold text-center text-blue-950'}>
                    <h2 className={'text-2xl'}>Special Discounted Drop Routes</h2>
                    <p>Book Now & Save More</p>
                </div>
                <div className={'bg-gray-100  py-12 md:mx-24 md:px-24  '}>
                    <Slider {...settings}>

                    {
                    offerInfo.map((offer, idx) =>
                        <div  key={idx} className={'flex flex-col mx-4 p-3 items-center space-y-4 text-black bg-white rounded-2xl shadow-2xl mt-5   font-kanit'}>
                            <h2 className={'text-2xl font-bold font-kanit'}>{offer.route}</h2>
                            <h1 className={'text-blue-500 font-bold text-4xl '}>{offer.price}</h1>
                            <ul className={'text-black list-disc text-xl '}>
                                <li>car type: {offer.vehicleType}</li>
                                <li>Total KM(covered): {offer.totalKM}KM</li>
                                <li>Extra Rate Per KM: {offer.extraRate}</li>
                                <li>{offer.otherCharges}</li>
                            </ul>
                        </div>
                    )}
                    </Slider>

                {/*// }*/}
                </div>
                {/*<div className={'flex flex-row justify-center space-x-3'}>*/}
                {/*    {*/}

                {/*        offerInfo.map((offer, i) =>*/}
                {/*        <div key={i} onClick={() => handleOffer(i)} className={'text-black text-xl'}>*/}
                {/*            <GoDotFill />*/}
                {/*            <span className={'hidden'}>{offer.route}</span>*/}
                {/*        </div>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
export default Offer;