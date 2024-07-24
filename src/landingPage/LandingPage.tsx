
import React, {useEffect, useRef, useState} from 'react'


// GOOGLE PLACE SEARCH APIS
import {Library} from "@googlemaps/js-api-loader";
import {useJsApiLoader} from "@react-google-maps/api";

// DATA
import bookingOption from "./bookingOption.ts";

// IMAGES
import touristImg from '../assets/landingPage/tourist2.png';
import BookingForm from "./BookingForm.tsx";
import RouteSelection from "./RouteSelection.tsx";

// LIBRARY USING
const library: Library[] = ['places', 'core'];

// FUNCTIONAL COMPONENT
const LandingPage:React.FC = () => {

    // STATE DATA HOLDER
    const [isSelected, setIsSelected] = useState<string>('outstation');
    const [isRoute, setIsRoute] = useState<string>('One Way');
    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null)
    console.log(autoComplete)
    // REF
    const inputRef = useRef<HTMLInputElement>(null);

    // configure google map places
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:import.meta.env.VITE_GOOGLE_PLACES_API,
        libraries : library
    });
    console.log(import.meta.env.VITE_GOOGLE_PLACES_API)
    // Load autocomplete
    useEffect(()=>{
        if(isLoaded){
            const autoComplete = new google.maps.places.Autocomplete(inputRef.current as HTMLInputElement);
            setAutoComplete(autoComplete);
        }
    }, [isLoaded])


    const handleSelectedRoute = (booking: string) => {
        setIsSelected(booking);
        if(booking === 'outstation'){
            setIsRoute('One Way')
        }
        if(booking === 'local'){
            setIsRoute('Half day')
        }
        if(booking === 'transfer'){
            setIsRoute('Railway Station')
        }
        if(booking === 'deal'){
            setIsRoute('Oneway Deal')
        }
    }
    return(
        <section>
        <div className={'flex flex-col lg:flex-row  items-center  pt-8 pb-16 bg-gray-100 px-3 mx-auto xl:pl-44 '}>
            <div className={' flex flex-col items-center justify-center space-y-8 pt-8 pb-16 bg-gray-100 px-3'}>
                {/*TOP DIV*/}
                <div className={'px-3 text-blue-950'}>
                    <h5>FOR One Way Taxi Booking</h5>
                    <h1 className={'text-4xl font-bold font-kanit'}>Book your taxi online</h1>
                    <div className={'flex justify-around pt-7 text-center items-center'}>
                        <h4 className={'bg-blue-900  rounded-lg p-3 text-white'}>(+91)-0000000000</h4>
                        <h4  className={'bg-yellow-400 rounded-lg p-3'}>chat with us</h4>
                    </div>
                </div>
                {/*BOOKING STATUS*/}
                <div className={'grid grid-cols-4 gap-1 items-center justify-center lg:ml-5 '}>
                    {bookingOption.map((booking, i) =>
                            <div key={i} onClick={() => handleSelectedRoute(booking.bookingType)} className={`flex flex-col py-3 mx-1  lg:px-5 text-center items-center rounded-xl uppercase text-blue-950 space-y-2 ${booking.bookingType === isSelected && 'bg-yellow-400'} lg:w-32 w-full `}>
                                <booking.bookIcon className={`text-2xl md:text-3xl`}/>
                                <span className={'text-[10px] font-bold md:text-sm mx-2'}>{booking.bookingType}</span>
                            </div>
                    )}
                </div>

                {/*ROUTES*/}
                    <RouteSelection isRoute={isRoute} isSelected={isSelected} setRoute={setIsRoute} />
                {/*BOOKING FORM*/}
                    <BookingForm isRoute={isRoute} isSelected={isSelected} reference={inputRef}/>
            </div>

                {/*IMAGES*/}
            {/*<div className={'xl:pl-12  flex '}>*/}
                <img src={touristImg} alt={'tourist img'} className={'opacity-70 lg:absolute xl:-right-5 lg:-right-52 -bottom-60   md:max-xl:w-8/12 xl:w-6/12 '}/>
            {/*</div>*/}
        </div>
        </section>
    )
};

export default LandingPage;