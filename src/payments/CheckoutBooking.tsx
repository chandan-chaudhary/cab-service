// import React from 'react'
import ApplyPromo from './ApplyPromo'
import Payments from './Payments'
import TaxiDetails from './TaxiDetails'
import TravelersInfo from './TravelersInfo'

function CheckoutBooking() {
  return (
    <section>
      <div className='lg:relative flex flex-col bg-gray-200'>
        <div className='uppercase  text-white bg-blue-800 py-3 text-center font-kanit font-bold text-xl mb-5'>
          <h3>Pay & Book</h3>
        </div>
          <div className='md:mx-24 lg:w-6/12'>
          <div>
          <TravelersInfo />
            <TaxiDetails />
            <div className='lg:absolute top-36 right-0 xl:right-32'>
              <ApplyPromo />
            </div>
            <Payments />
          </div>
          </div>
      </div>
    </section>
  )
}

export default CheckoutBooking