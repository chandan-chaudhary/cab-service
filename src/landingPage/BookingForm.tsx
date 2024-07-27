import {useNavigate} from "react-router-dom";
import React, {RefObject, useState} from "react";
import suvImg from '../assets/vehicles/suv.png';
import sedanImg from '../assets/vehicles/sedan.png';
import { LuPlus } from "react-icons/lu";


interface routeProps {
    isRoute?: string,
    isSelected?: string
    reference: RefObject<HTMLInputElement>
}


interface InputInfo {
    fullName: string,
    contact: string,
    email: string,
    sourceCity? :string,
    pickUp_Address? :string,
    // drop_Address?: string[],
    pickUp_Date? : string,
    drop_Date?: string
    pickUp_Time? :string,
}

const BookingForm = (props: routeProps) => {
    const [inputs, setInputs] = useState<InputInfo>({
        fullName: '',
        contact: ' ',
        email: ' ',
        sourceCity: "",
        pickUp_Address: "",
        // drop_Address: [],
        pickUp_Date: '',
        drop_Date: ' ',
        pickUp_Time: '',
    })
    const [multipleDestination, setMultipleDestination] = useState<string[]>([]);

    const [otherDropAddress, setOtherDropAddress] = useState<boolean>(false)
    const navigate = useNavigate()
    // console.log(inputs)
    console.log(props.isRoute);

    return (
        
        <section>
            <div className={''}>
                <div className={'flex flex-col bg-blue-900  space-y-4 py-5 border-t-4 border-orange-500 '}>
                    <div className={'text-2xl text-white font-bold pb-6 text-center sm:max-md:px-12 md:w-96'}>
                        <h2>Book Your {props.isRoute} Taxi</h2>
                    </div>
                    <div className={' px-5'}>
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
                              className={'flex flex-col gap-y-3  sm:mx-auto '}>
                        <div className={'flex flex-col lg:flex-row lg:w-7/12 gap-y-4 gap-4'}>
                            <div className={'flex flex-col lg:w-44'}>
                                <label htmlFor={'name'}>Full Name</label>
                                <input type={'text'} name={'name'} placeholder={'your name'}
                                       className={'p-1 pl-3   outline-none bg-white text-black '} value={inputs.fullName}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                           ...inputs,
                                           fullName: e.target.value
                                       })}/>
                            </div>
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
                        <div className={'flex flex-col'}>
                            <label htmlFor={'email'}>Email</label>
                            <input type={'email'} name={'email'} placeholder={'your email'}
                                   className={'p-1 pl-3   outline-none bg-white text-black'} value={inputs.email}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       email: e.target.value
                                   })}/>
                        </div>
                        <div className={` flex flex-col  ${props.isSelected != 'transfer' && 'hidden'}`}>
                            <label htmlFor={'source city'}>Source city</label>
                            <input ref={props.reference} type={'text'} name={'source city'} placeholder={'Source city'}
                                   className={'p-1 pl-3  outline-none bg-white text-black'} value={inputs.sourceCity}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       sourceCity: e.target.value
                                   })}/>
                        </div>
                        <div className={'flex flex-col '}>
                            <label htmlFor={'pickup address'}>PickUp Address</label>
                            <input ref={props.reference} type={'text'} name={'pickup address'}
                                   placeholder={'pickup address'}
                                   className={'p-1 pl-3  outline-none bg-white text-black'} value={inputs.pickUp_Address}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       pickUp_Address: e.target.value
                                   })}/>
                        </div>
                        <div className={`flex flex-col ${props.isSelected === 'local' && 'hidden'}`}>
                            <label htmlFor={'destination city'}>Drop Address</label>
                            <input type={'text'} placeholder={'Drop location'} name={'destination city'}
                                   className={'p-1 pl-3  outline-none bg-white text-black'}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMultipleDestination([
                                       ...multipleDestination,   e.target.value ])}/>
                        </div>
                        {/*MULTICITY DIV*/}
                        {
                            props.isRoute === 'Multicity' &&
                            <div>
                                <div className="flex justify-end ">
                                    <button onClick={() => setOtherDropAddress(true)} className="p-0.5 text-white rounded-full border-2 border-white text-xl mr-5"><LuPlus /></button>
                                </div>
                                <div className={`flex flex-col ${otherDropAddress || 'hidden'} `}>
                                    <label htmlFor={'destination city'}>Drop Address</label>
                                    <input type={'text'} placeholder={'Drop location'} name={'destination city'}
                                        className={'p-1 pl-3  outline-none bg-white text-black'} 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMultipleDestination([...multipleDestination, e.target.value])}/>
                                </div>
                            </div>
                        }
                        {/* DATE AND TIME SELECTION*/}
                        <div className={'flex flex-col'}>
                            <label htmlFor={'start date'}>PickUp Date</label>
                            <input type='date' placeholder={'start date'} name={'start date'}
                                   className={'p-1 pl-3  outline-none bg-white text-black'} value={(inputs.pickUp_Date)}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       pickUp_Date: e.target.value
                                   })}/>
                        </div>
                        {
                            props.isSelected != 'deal' &&
                            <>
                                <div className={`${props.isRoute != 'one-way' ? '' : 'hidden'} flex flex-col`}>
                                    <label htmlFor={'end date'}>Drop Date</label>
                                    <input type={'date'} placeholder={'end date'} name={'end date'}
                                           className={`p-1.5 pl-3  outline-none bg-white text-black`}
                                           value={inputs.drop_Date}
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                               ...inputs,
                                               drop_Date: e.target.value
                                           })}/>
                                </div>
                                <div className={'flex flex-col'}>
                                    <label htmlFor={'pickup time'}>PickUp Time</label>
                                    <input type={'time'} placeholder={'start time'} name={'pickup time'}
                                           className={'p-1 pl-3   outline-none bg-white text-black'}
                                           value={inputs.pickUp_Time}
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                               ...inputs,
                                               pickUp_Time: e.target.value
                                           })}/>
                                </div>
                            </>
                        }
                        <div className="flex flex-col space-y-2 sm:pt-3">
                            <h5>Please select a cab</h5>
                            <div className="flex space-x-8 justify-center items-center">
                                <div className="flex flex-col w-12 items-center">
                                    <p className="text-[12px]">17 ₹ / km</p>
                                    <img src={sedanImg} alt="suv-icon" className=""/>
                                    <p className="uppercase text-[12px]">sedan</p>
                                </div>
                                <div className="flex flex-col w-12 items-center">
                                    <p className="text-[12px]">17 ₹ / km</p>
                                    <img src={suvImg} alt="suv-icon" className=""/>
                                    <p className="uppercase text-[12px]">etios</p>
                                </div>
                                <div className="flex flex-col w-12 items-center">
                                    <p className="text-[12px]">17 ₹ / km</p>
                                    <img src={sedanImg} alt="suv-icon" className=""/>
                                    <p className="uppercase text-[12px]">toyota</p>
                                </div>
                                <div className="flex flex-col w-12 items-center">
                                    <p className="text-[12px]">17 ₹ / km</p>
                                    <img src={suvImg} alt="suv-icon" className=""/>
                                    <p className="uppercase text-[12px]">suv</p>
                                </div>

                                {/* <img src={suvImg} alt="suv-icon" />
                                <img src={sedanImg} alt="suv-icon" />
                                <img src={suvImg} alt="suv-icon" /> */}
                            </div>
                        </div>
                        <button onClick={() => {
                            console.log(inputs, multipleDestination);
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