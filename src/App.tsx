import React from 'react'
import Header from "./header/Header.tsx";
import LandingPage from "./landingPage/LandingPage.tsx";

const App:React.FC = () =>{
  return (
      <div className={''}>
          <Header />
          <LandingPage />
      </div>
  )
}

export default App;
