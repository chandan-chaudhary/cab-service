import React, {useState} from "react";
import {FaCarAlt, FaCaretDown, FaCaretUp} from "react-icons/fa";
import {FaCreditCard} from "react-icons/fa6";
import {RxCross2} from "react-icons/rx";
import { useNavigate } from "react-router-dom";

interface BookCabProps {
    showBooking?: boolean,
    setBooking?: React.Dispatch<React.SetStateAction<boolean>>,
    cabDetail?: {
        cabName:string, cabPrice: number | string
    }
}
const BookCab = (props: BookCabProps) => {
    const [count, setCount] = useState<number>(1);
    const [pay, setPay] = useState<number>(25);
   // const topMargin = (Math.round(window.scrollY))+'px';
  const navigate = useNavigate();
    return (
        <div className={`absolute top-36 left-10 w-72 backdrop-blur-xl ${props?.showBooking || 'hidden'}`}>
            <div className={'flex flex-col text-blue-950 bg-white p-7'}>
                <div className={'flex items-center justify-between'}>
                    <h4 className={'font-bold text-gray-600 uppercase '}>{props.cabDetail?.cabName}</h4>
                    <RxCross2 onClick={() => { // @ts-ignore
                        props.setBooking(false)
                    }} className={'text-2xl font-extrabold'}/>
                </div>
                {/*TOTAL NO OF CAB*/}
                <div className={'mt-5'}>
                    <h3 className={'font-bold text-lg '}>Select number of Cars</h3>
                    <div
                        className={'flex items-center text-lg justify-between border-2 border-gray-400 px-5 py-1 mt-2'}>
                        <div className={'flex space-x-5 text-slate-500 items-center'}>
                            <FaCarAlt className={'text-2xl'}/>
                            <h5 className={'text-xl'}>{count} Cab</h5>
                        </div>
                        <div className={''}>
                            <FaCaretUp onClick={() => setCount(count + 1)}/>
                            <FaCaretDown onClick={() => {
                                count > 1 && setCount(count - 1)
                            }}/>
                        </div>
                    </div>
                </div>
                {/*MINIMUM AMOUNT TO PAY*/}
                <div className={'mt-3'}>
                    <h3 className={'font-bold text-lg '}>Pay to Confirm Booking</h3>
                    <div
                        className={'flex items-center text-lg justify-between border-2 border-gray-400 px-5 py-1  mt-2'}>
                        <div className={'flex space-x-5 text-slate-500 items-center'}>
                            <FaCreditCard className={'text-2xl'}/>
                            <h5 className={'text-xl'}>{pay} %</h5>
                        </div>
                        <div className={''}>
                            <FaCaretUp onClick={() => {
                                pay < 100 && setPay(pay + 25)
                            }}/>
                            <FaCaretDown onClick={() => {
                                pay > 25 && setPay(pay - 25)
                            }}/>
                        </div>
                    </div>
                </div>
                {/*TOTAL AMOUNT*/}
                <div className={'mt-3'}>
                    <h3 className={'font-bold text-lg '}>Amount</h3>
                    <div
                        className={'flex items-center text-lg justify-between border-2 border-gray-400 px-5 py-1  mt-2'}>
                        <div className={'flex space-x-5 font-bold items-center'}>
                            <h5 className={'text-xl'}>₹ {props.cabDetail?.cabPrice}</h5>
                        </div>
                    </div>
                </div>
                <button onClick={() => navigate('/pay&book')} className={'bg-yellow-500 p-3 uppercase text-white font-bold mt-3'}>book cab</button>
            </div>
        </div>
    )
};
export default BookCab;