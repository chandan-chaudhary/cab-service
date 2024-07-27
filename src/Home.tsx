
import React from 'react'

// IMAGES
// import Header from "./header/Header.tsx";
import LandingPage from "./landingPage/LandingPage.tsx";
import Services from "./services/Services.tsx";
import Traiff from "./traiff/Traiff.tsx";
import Offer from "./offers/Offer.tsx";
import Terms_Condition from "./terms_condition/Terms_Condition.tsx";
import OutStation from "./outstationBooking/OutStation.tsx";
import PopularDestination from "./destinations/Popular_Destination.tsx";
// import CheckoutBooking from './payments/CheckoutBooking.tsx';

const Home:React.FC = () =>{
    return (
        <div className={'bg-gray-100'}>
            {/* <CheckoutBooking /> */}
            <LandingPage />
            <Services />
            <Traiff />
            <Terms_Condition />
            <Offer />
            <OutStation />
            <PopularDestination />
        </div>
    )
}

export default Home;
