import {useNavigate} from "react-router-dom";
import React, {RefObject, useState} from "react";

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
    drop_Address? :string,
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
        drop_Address: "",
        pickUp_Date: '',
        drop_Date: ' ',
        pickUp_Time: '',
    })
    const navigate = useNavigate()
    // console.log(inputs)
    return (
        <section>
            <div className={''}>
                <div className={'flex flex-col bg-blue-900 mt-8 space-y-4 py-5 border-t-4 border-orange-500'}>
                    <div className={'text-2xl text-white font-bold pb-6 text-center'}>
                        <h2>Book Your {props.isRoute} Taxi</h2>
                    </div>

                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
                          className={'flex flex-col gap-y-6 w-96 px-12'}>
                        <div className={'flex flex-col gap-y-6'}>
                            <div className={'flex flex-col'}>
                                <label htmlFor={'name'}>Full Name</label>
                                <input type={'text'} name={'name'} placeholder={'your name'}
                                       className={'p-2 pt-3  outline-none bg-white text-black'} value={inputs.fullName}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({...inputs, fullName: e.target.value})}/>
                            </div>
                            <div className={'flex flex-col'}>
                                <label htmlFor={'contact'}>Contact</label>
                                <input type={'text'} name={'contact'} placeholder={'your contact'}
                                       className={'p-2 pt-3  outline-none bg-white text-black'} value={inputs.contact}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                           ...inputs,
                                           contact: e.target.value
                                       })}
                                />
                            </div>
                            <div className={'flex flex-col'}>
                                <label htmlFor={'email'}>Email (optional)</label>
                                <input type={'email'} name={'email'} placeholder={'your email'}
                                       className={'p-2 pt-3  outline-none bg-white text-black'} value={inputs.email}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                           ...inputs,
                                           email: e.target.value
                                       })}/>
                            </div>
                        </div>
                        <div className={` flex flex-col  ${props.isSelected != 'transfer' && 'hidden'}`}>
                            <label htmlFor={'source city'}>Source city</label>
                            <input ref={props.reference} type={'text'} name={'source city'} placeholder={'Source city'}
                                   className={'p-2 pt-3 outline-none bg-white text-black'} value={inputs.sourceCity}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       sourceCity: e.target.value
                                   })}/>
                        </div>
                        <div className={'flex flex-col '}>
                            <label htmlFor={'pickup address'}>PickUp Address</label>
                            <input ref={props.reference} type={'text'} name={'pickup address'}
                                   placeholder={'pickup address'}
                                   className={'p-2 pt-3 outline-none bg-white text-black'} value={inputs.pickUp_Address}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       pickUp_Address: e.target.value
                                   })}/>
                        </div>
                        <div className={`flex flex-col ${props.isSelected === 'local' && 'hidden'}`}>
                            <label htmlFor={'destination city'}>Drop Address</label>
                            <input type={'text'} placeholder={'Drop location'} name={'destination city'}
                                   className={'p-2 pt-3 outline-none bg-white text-black'} value={inputs.drop_Address}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                       ...inputs,
                                       drop_Address: e.target.value
                                   })}/>
                        </div>
                        {/*MULTICITY DIV*/}
                        {/* DATE AND TIME SELECTION*/}
                        <div className={'flex flex-col'}>
                            <label htmlFor={'start date'}>PickUp Date</label>
                            <input type='date' placeholder={'start date'} name={'start date'}
                                   className={'p-2  outline-none bg-white text-black'} value={(inputs.pickUp_Date)}
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
                                           className={`p-2 pt-3 outline-none bg-white text-black`}
                                           value={inputs.drop_Date}
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                               ...inputs,
                                               drop_Date: e.target.value
                                           })}/>
                                </div>
                                <div className={'flex flex-col'}>
                                    <label htmlFor={'pickup time'}>PickUp Time</label>
                                    <input type={'time'} placeholder={'start time'} name={'pickup time'}
                                           className={'p-2 pt-3  outline-none bg-white text-black'}
                                           value={inputs.pickUp_Time}
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                               ...inputs,
                                               pickUp_Time: e.target.value
                                           })}/>
                                </div>
                            </>
                        }
                        <button onClick={() => {
                            console.log(inputs);
                            localStorage.setItem('bookingInputs', JSON.stringify(inputs));
                            localStorage.setItem('bookRoute', (props.isRoute));
                            localStorage.setItem('selectBooking', (props.isSelected));
                            navigate('/select-cab');

                        }}
                                className={'bg-orange-400 uppercase p-2 font-bold text-center text-white'}>search cab
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};
export default BookingForm;