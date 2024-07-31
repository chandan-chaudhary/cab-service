import { useNavigate } from "react-router-dom";
import React, { FormEvent, RefObject, useState } from "react";
import suvImg from '../assets/vehicles/suv.png';
import sedanImg from '../assets/vehicles/sedan.png';
import { LuMinus, LuPlus } from "react-icons/lu";
import { TiLocation } from "react-icons/ti";
import { IoMdTimer } from "react-icons/io";
import { MdDateRange } from "react-icons/md";



interface routeProps {
    isRoute?: string,
    isSelected?: string
    reference: RefObject<HTMLInputElement>
}


interface InputInfo {
    fullName: string,
    contact: string,
    email: string,
    sourceCity?: string,
    pickUp_Address?: string,
    drop_Address?: string[],
    pickUp_Date?: string,
    drop_Date?: string
    pickUp_Time?: string,
}
const BookingForm = (props: routeProps) => {
    const [inputs, setInputs] = useState<InputInfo>({
        fullName: '',
        contact: ' ',
        email: ' ',
        sourceCity: "",
        pickUp_Address: "",
        drop_Address: [],
        pickUp_Date: '',
        drop_Date: ' ',
        pickUp_Time: '',
    })
    const [multipleDestination, setMultipleDestination] = useState<string[]>([]);
    const [otherDropAddress, setOtherDropAddress] = useState<never[][] | undefined[][]>([]);
    const navigate = useNavigate()
    // console.log(props.isRoute);
    // ADD INPUT FIELD
    const handleAddInput = () => {
        console.log('data');
        const res = [...otherDropAddress, []]
        setOtherDropAddress(res)
    }

    // DELETE INPUT FIELD
    const handleDeleteInput = (idx: number) => {
        const deleteAddress = [...otherDropAddress];
        deleteAddress.splice(idx);
        setOtherDropAddress(deleteAddress);
    }
    // console.log(otherDropAddress);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputs, multipleDestination);
   

    }
    return (
        <section>
            <div className={''}>
                <div className={'flex flex-col bg-blue-900  space-y-4 py-5 border-t-4 border-orange-500 '}>
                    <div className={'text-2xl text-white font-bold pb-6 text-center sm:max-md:px-12 md:w-96'}>
                        <h2>Book Your {props.isRoute} Taxi</h2>
                    </div>
                    <div className={' px-5'}>
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleFormSubmit(e)}
                            className={'flex flex-col gap-y-3  sm:mx-auto '}>
                            <div className={'flex flex-col lg:flex-row lg:w-7/12 gap-y-4 gap-4'}>
                                {/* NAME */}
                                <div className={'flex flex-col lg:w-44'}>
                                    <label htmlFor={'name'}>Full Name</label>
                                    <input type={'text'} name={'name'} placeholder={'your name'}
                                        className={'p-1 pl-3   outline-none bg-white text-black '} value={inputs.fullName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                            ...inputs,
                                            fullName: e.target.value
                                        })} />
                                </div>
                                {/* CONTACT */}
                                <div className={'flex flex-col lg:w-44'}>
                                    <label htmlFor={'contact'}>Contact</label>
                                    <input type={'text'} name={'contact'} placeholder={'your contact'}
                                        className={'p-1 pl-3   outline-none bg-white text-black'} value={inputs.contact}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                            ...inputs,
                                            contact: e.target.value
                                        })}
                                    />
                                </div>

                            </div>
                            {/* EMAIL */}
                            <div className={'flex flex-col'}>
                                <label htmlFor={'email'}>Email</label>
                                <input type={'email'} name={'email'} placeholder={'your email'}
                                    className={'p-1 pl-3   outline-none bg-white text-black'} value={inputs.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                        ...inputs,
                                        email: e.target.value
                                    })} />
                            </div>
                            {/* SOURCE CITY */}
                            <div className={`relative flex flex-col  ${props.isSelected != 'transfer' && 'hidden'}`}>
                                <label htmlFor={'source city'}>Source city</label>
                                <input ref={props.reference} type={'text'} name={'source city'} placeholder={'Source city'}
                                    className={' p-1 pl-12 outline-none bg-white text-black'} value={inputs.sourceCity}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                        ...inputs,
                                        sourceCity: e.target.value
                                    })} />
                                {/* LOCATION ICON */}
                                <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                    <TiLocation />
                                </div>
                            </div>
                            <div className={' relative flex flex-col '}>
                                {/* PICKUP ADDRESS */}
                                <label htmlFor={'pickup address'}>PickUp Address</label>
                                <input ref={props.reference} type={'text'} name={'pickup address'}
                                    placeholder={'pickup address'}
                                    className={'p-1 pl-12  outline-none bg-white text-black'} value={inputs.pickUp_Address}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                        ...inputs,
                                        pickUp_Address: e.target.value
                                    })} />
                                {/* LOCATION ICON */}
                                <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                    <TiLocation />
                                </div>
                            </div>
                            {/* DROP ADDRESS */}
                            <div className={`relative flex flex-col ${props.isSelected === 'local' && 'hidden'}`}>
                                <label htmlFor={'destination city'}>Drop Address</label>
                                <input type={'text'} placeholder={'Drop location'} name={'destination city'}
                                    className={'p-1 pl-12  outline-none bg-white text-black'}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMultipleDestination([...multipleDestination, e.target.value])} />

                                {/* LOCATION ICON */}
                                <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                    <TiLocation />
                                </div>
                            </div>

                            {/*MULTICITY DIV*/}
                            {
                                props.isRoute === 'Multicity' &&
                                <>
                                    <div className="flex justify-end items-end ">
                                        <button onClick={handleAddInput} className="p-0.5 text-white rounded-full border-2 border-white text-xl mr-5 mt-2"><LuPlus /></button>

                                    </div>
                                    {/* HANDLE MULTIPLE DROP ADDRESS */}
                                    {
                                        otherDropAddress.map((drop, idx) =>
                                            <div key={idx}>
                                                <div className={`relative flex flex-col `}>
                                                    <label htmlFor={'destination city'}>Drop Address</label>
                                                    <input type={'text'} placeholder={'Drop location'} name={'destination city'}
                                                        className={'p-1 pl-12  outline-none bg-white text-black'}
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMultipleDestination([...multipleDestination, e.target.value])} />

                                                    {/* LOCATION ICON */}
                                                    <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                                        <TiLocation />
                                                    </div>
                                                </div>
                                                <div className="flex justify-end items-end ">
                                                    <button onClick={() => handleDeleteInput(idx)} className={` p-0.5 text-white rounded-full border-2 border-white text-xl mr-5 mt-2`}><LuMinus />{drop}</button>
                                                    <button onClick={handleAddInput} className="p-0.5 text-white rounded-full border-2 border-white text-xl mr-5 mt-2"><LuPlus /></button>

                                                </div>
                                            </div>

                                        )
                                    }
                                </>
                            }
                            {/* DATE AND TIME SELECTION*/}
                            <div className={'relative flex flex-col'}>
                                <label htmlFor={'start date'}>PickUp Date</label>
                                <input type='date' placeholder={'start date'} name={'start date'}
                                    className={'p-1 pl-12  outline-none bg-white text-black'} value={(inputs.pickUp_Date)}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                        ...inputs,
                                        pickUp_Date: e.target.value
                                    })} />
                                {/* DATE ICON */}
                                <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                    <MdDateRange />
                                </div>

                            </div>
                            {
                                props.isSelected != 'deal' &&
                                <>
                                    {/* DROP DATE */}
                                    <div className={`relative ${props.isRoute != 'one-way' ? '' : 'hidden'} flex flex-col`}>
                                        <label htmlFor={'end date'}>Drop Date</label>
                                        <input type={'date'} placeholder={'end date'} name={'end date'}
                                            className={`p-1.5 pl-12  outline-none bg-white text-black`}
                                            value={inputs.drop_Date}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                                ...inputs,
                                                drop_Date: e.target.value
                                            })} />

                                        {/* DATE ICON */}
                                        <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                            <MdDateRange />
                                        </div>
                                    </div>
                                    {/* PICKUP TIME */}
                                    <div className={'relative flex flex-col'}>
                                        <label htmlFor={'pickup time'}>PickUp Time</label>
                                        <input type={'time'} placeholder={'start time'} name={'pickup time'}
                                            className={'p-1 pl-12   outline-none bg-white text-black'}
                                            value={inputs.pickUp_Time}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                                ...inputs,
                                                pickUp_Time: e.target.value
                                            })} />
                                        {/* TIME ICON */}

                                        <div className="absolute left-0 bottom-0 text-yellow-500 text-3xl border-r-2 border-gray-400">
                                            <IoMdTimer />
                                        </div>
                                    </div>
                                </>
                            }
                            {/* AVAILABLE CAB IMAGES */}
                            <div className="flex flex-col space-y-2 sm:pt-3">
                                <h5>Please select a cab</h5>
                                <div className="flex space-x-8 justify-center items-center">
                                    <div className="flex flex-col w-12 items-center">
                                        <p className="text-[12px]">17 ₹ / km</p>
                                        <img src={sedanImg} alt="suv-icon" className="" />
                                        <p className="uppercase text-[12px]">sedan</p>
                                    </div>
                                    <div className="flex flex-col w-12 items-center">
                                        <p className="text-[12px]">17 ₹ / km</p>
                                        <img src={suvImg} alt="suv-icon" className="" />
                                        <p className="uppercase text-[12px]">etios</p>
                                    </div>
                                    <div className="flex flex-col w-12 items-center">
                                        <p className="text-[12px]">17 ₹ / km</p>
                                        <img src={sedanImg} alt="suv-icon" className="" />
                                        <p className="uppercase text-[12px]">toyota</p>
                                    </div>
                                    <div className="flex flex-col w-12 items-center">
                                        <p className="text-[12px]">17 ₹ / km</p>
                                        <img src={suvImg} alt="suv-icon" className="" />
                                        <p className="uppercase text-[12px]">suv</p>
                                    </div>
                                </div>
                            </div>

                            {/* HANDLE CLICK */}
                            <button onClick={() => {
                            localStorage.setItem('bookingInputs', JSON.stringify(inputs));
                            localStorage.setItem('bookRoute', (props.isRoute) as string);
                            localStorage.setItem('selectBooking', (props.isSelected) as string);
                            navigate('/select-cab');

                            }}
                                className={'bg-orange-400 uppercase p-1.5 pl-3 font-bold text-center text-white mt-4 mx-12 rounded-sm'}>search cab
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default BookingForm;