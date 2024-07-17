
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
    const [isRoute, setIsRoute] = useState<string>('one-way');
    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | null>(null)

    // REF
    const inputRef = useRef<HTMLInputElement>(null);

    // configure google map places
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:'AIzaSyCytEbChMPtEJvbXR3eivnbOT-_d1YmiLw',
        libraries : library
    });

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
            setIsRoute('one-way')
        }
        if(booking === 'local'){
            setIsRoute('half day')
        }
        if(booking === 'transfer'){
            setIsRoute('railway station')
        }
        if(booking === 'deal'){
            setIsRoute('oneway deal')
        }
    }
    return(
        <div className={'flex flex-col items-center justify-center space-y-8 pt-8 pb-16 bg-gray-100 px-3 mx-auto w-screen'}>
            <div className={'flex flex-col items-center justify-center space-y-8 pt-8 pb-16 bg-gray-100 px-3'}>
                {/*TOP DIV*/}
                <div className={'px-3 text-blue-950 '}>
                    <h5>FOR One Way Taxi Booking</h5>
                    <h1 className={'text-4xl font-bold font-kanit'}>Book your taxi online</h1>
                    <div className={'flex justify-around pt-7 text-center items-center'}>
                        <h4 className={'bg-blue-900  rounded-lg p-3 text-white'}>(+91)-0000000000</h4>
                        <h4  className={'bg-yellow-400 rounded-lg p-3'}>chat with us</h4>
                    </div>
                </div>
                {/*BOOKING STATUS*/}
                <div className={' grid grid-cols-4 items-center justify-center md:gap-12  '}>
                    {bookingOption.map((booking, i) =>
                            <div key={i} onClick={() => handleSelectedRoute(booking.bookingType)} className={`flex flex-col p-3 m-1 text-center items-center rounded-xl uppercase text-blue-950 space-y-2 ${booking.bookingType === isSelected && 'bg-yellow-400'} `}>
                                <booking.bookIcon className={`text-2xl md:text-3xl`}/>
                                <span className={'text-[10px] font-bold md:text-sm'}>{booking.bookingType}</span>
                            </div>
                    )}
                </div>
                {/*ROUTES*/}
                    <RouteSelection isRoute={isRoute} isSelected={isSelected} setRoute={setIsRoute} />
                {/*BOOKING FORM*/}
                    <BookingForm isRoute={isRoute} isSelected={isSelected} reference={inputRef}/>
            </div>
                {/*IMAGES*/}
            <div>
                <img src={touristImg} alt={'tourist img'} className={''}/>
            </div>
        </div>
    )
};

export default LandingPage;