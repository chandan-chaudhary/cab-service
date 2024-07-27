import { useState } from 'react';
// import adminLoginImg from '../assets/admin/adminLogin.png';
import adminLoginImg2 from '../assets/admin/adminLogin2.jpg';
import { FcGoogle } from "react-icons/fc";

import toast, {  Toaster} from 'react-hot-toast';

import { IoIosEye , IoIosEyeOff} from "react-icons/io";

interface AdminLoginInfo{
    username: string;
    password: string;
}

function Login() {

    const [showPass, setShowPass] = useState<boolean>(true);
    const [loginData, setLoginData] = useState<AdminLoginInfo>(
        {username: '', password: ''}
    )

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
                if(!loginData.username || !loginData.password){
                    toast.error('missing credentials')
                }
                localStorage.setItem('loginData', JSON.stringify(loginData));
        }catch(err){
            console.log(err);
            
        }
    }
    return (
        <section>
            <div className='flex items-center justify-center bg-gray-200 p-10 sm:pt-24 md:pt-32 pb-24 '>
                <div className='flex bg-white lg:w-9/12  justify-center text-blue-950 w-fit rounded-lg border-b-4 border-blue-950  md:py-1 '>
                    <div className=''>
                    <Toaster />
                    </div>
                    <div className='flex flex-col space-y-5 items-center justify-between p-10 border-r-4 border-gray-200'>
                        <h4 className='font-kanit font-bold uppercase text-xl'>Admin Login</h4>
                        <form className=' flex flex-col space-y-5' onSubmit={(e) => handleLoginSubmit(e)}>
                            <div>
                                <label className='text-lg' htmlFor='username'>Username</label>
                                <input type="text" name="username" placeholder='username' className='rounded-lg bg-inherit border-2 border-gray-500 p-1 pl-3 w-full' onChange={(e) => setLoginData({...loginData, username: e.target.value})} />
                            </div>
                            <div>
                                <label className='text-lg' htmlFor='password'>Password</label>
                                <div className='relative flex'>
                                <input type={`${showPass ? 'password' : 'text'}`} name="password" placeholder='password' className='rounded-lg bg-inherit border-2 border-gray-500 p-1 pl-3 w-full ' onChange={(e) => setLoginData({...loginData, password: e.target.value})} />
                                <span className='absolute right-2 top-1.5 text-2xl'>{showPass ? <IoIosEye onClick={() => setShowPass(!showPass)}/> : <IoIosEyeOff onClick={() => setShowPass(!showPass)} />}</span> 
                                </div>
                            </div>
                            <div className='w-full text-center mt-10'>
                                <button className='p-3 px-8 rounded-lg text-white uppercase font-bold bg-blue-950'>login</button>
                            </div>
                        </form>
                        <div className='w-full h-0.5 bg-gray-200'></div>

                        <div className='flex flex-col items-center space-y-3'>
                            <h5 className='text-gray-400 font-semibold'>or continue with</h5>
                            <FcGoogle className='text-3xl'/>
                        </div>
                    </div>
                    <div className='sm:max-md:hidden'>
                        {/* img// */}
                        <img src={adminLoginImg2} alt="loginImg" className='w-96' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login