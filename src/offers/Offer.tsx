import React from 'react';
import offerInfo from "./offter.ts";
// import { GoDotFill } from "react-icons/go";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Offer:React.FC =()=>{
    // const [currentIndex, setCurrentIndex] = useState<number>(0);
    // // const [screenSize, setScreenSize] = useState<string>();
    // const handleOffer = (i:number) =>{
    //     setCurrentIndex(i);
    // };
    console.log(window.screen.availWidth >=1024 , 'screen')

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: window.screen.availWidth >=1024 ? 2: 1 ,
        slidesToScroll: 1
    };
    return(
        <section>
            <div className={'bg-gray-100  py-12 sm:px-1'}>
                <div className={'font-kanit font-bold text-center text-blue-950'}>
                    <h2 className={'text-2xl'}>Special Discounted Drop Routes</h2>
                    <p>Book Now & Save More</p>
                </div>
                <div className={'px-5 py-12  md:px-24 lg:px-12  '}>
                    <Slider {...settings} >
                    {
                    offerInfo.map((offer, idx) =>

                        <div key={idx}
                             className={'flex flex-col  gap-x-4 py-8 text-center space-y-4 text-black bg-white rounded-2xl mt-5   font-kanit border-2'}>
                            {/*<div>*/}
                                <h2 className={'text-2xl font-bold font-kanit'}>{offer.route}</h2>
                                <h1 className={'text-blue-500 font-bold text-4xl '}>{offer.price}</h1>
                                <ul className={'flex flex-col text-black text-xl text-start pl-16 list-disc'}>
                                    <li>car type: {offer.vehicleType}</li>
                                    <li>Total KM(covered): {offer.totalKM}KM</li>
                                    <li>Extra Rate Per KM: {offer.extraRate}</li>
                                    <li>{offer.otherCharges}</li>
                                </ul>
                             {/*</div>*/}
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