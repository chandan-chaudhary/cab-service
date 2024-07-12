import React from 'react'
import Header from "./header/Header.tsx";
import LandingPage from "./landingPage/LandingPage.tsx";
import ServiceOverall from "./services/ServiceOverall.tsx";
import Services from "./services/Services.tsx";
import Traiff from "./traiff/Traiff.tsx";
import Offer from "./offers/Offer.tsx";

const App:React.FC = () =>{
  return (
      <div className={''}>
          <Header />
          <LandingPage />
          <ServiceOverall />
          <Services />
          <Traiff />
          <Offer />
      </div>
  )
}

export default App;
