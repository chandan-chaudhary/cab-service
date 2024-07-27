// import React from 'react'

import visaCardImg from '../assets/payment_cardsImg/visa.png';
import masterCardImg from '../assets/payment_cardsImg/mastercard.png';
import rupayCardImg from '../assets/payment_cardsImg/rupay.jpg';
import upiImg from '../assets/payment_cardsImg/upiMethod.jpg';
import mobiQwikImg from '../assets/payment_cardsImg/mobikwik.png';
import freechargeImg from '../assets/payment_cardsImg/freecharge.png';
// import Img from '../assets/payment_cardsImg/visa.png';
// import visaCardImg from '../assets/payment_cardsImg/visa.png';

function Payments() {
  return (
    <section>
      <div className='bg-white text-blue-950 p-4 rounded-lg border-b-4 border-blue-950 mx-4 mb-12'>
        <h4 className='uppercase text-2xl text-center py-5 font-bold font-kanit'>payment</h4>
        <div className='flex items-center justify-center gap-x-2 lg:gap-x-12 px-4 py-5'>
          <button className='bg-blue-900 text-white uppercase p-2 '>Online Payment</button>
          <button className='bg-blue-900 text-white uppercase p-2'>Other Payment Method</button>
        </div>
        <div className='flex flex-col items-center gap-4 lg:gap-x-12 p-1'>
          <div className='grid grid-cols-3 items-center gap-x-16 gap-y-4 justify-content-center'>
            <img src={visaCardImg} alt='visa-img' className='w-12 lg:w-24 h-fit' />
            <img src={masterCardImg} alt='visa-img' className='w-12 h-fit lg:w-24' />
            <img src={rupayCardImg} alt='visa-img' className='w-12 h-fit lg:w-24' />
            <img src={upiImg} alt='visa-img' className='w-12 lg:w-24 h-fit' />
            <img src={mobiQwikImg} alt='visa-img' className='w-16 lg:w-28 h-fit ' />
            <img src={freechargeImg} alt='visa-img' className='w-16 lg:w-28 h-fit' />
          </div>
          <div className='flex flex-col space-y-3 items-center'>
            <div className='bg-green-100 border-2 border-green-500 text-green-500 p-1 font-mono my-5'>
              <p>you will be redirected to a secure payment gateway</p>
            </div>
            <button className='p-3 w-fit rounded-lg bg-blue-900 uppercase font-semibold px-7 text-white'>make payment</button>
            <div className='flex items-center text-start gap-x-2 text-xl'>
              <input type="checkbox" name="terms" className='text-xl accent-blue-500' />
              <p>I have read all <span className='text-blue-500 underline' >Terms & condition</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payments