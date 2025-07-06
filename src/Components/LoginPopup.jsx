import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { StoreContext } from './Context/StoreContext';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  const { url, setToken } = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const LoginSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password
      }
      const response = await axios.post(`${url}/api/user/login`, userInfo);
      if (response.data.success) {
        toast.success("Signup Successful")
        setShowLogin(false);
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
      }
      else {
        toast.error(response.data.message);
      }
      

    } catch (error) {
      console.log("Error in Login " + error)
      toast.error("Error in Login")
    }
    reset();
  }
  const SignupSubmit = async (data) => {

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      const response = await axios.post(`${url}/api/user/register`, userInfo);
      if (response.data.success) {
        toast.success("Signup Successful")
        setToken(response.data.token);
        console.log(response.data.token)
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
      }
      else {
        toast.error(response.data.message);
      }
      

    } catch (error) {
      console.log("Error in Signup " + error)
      toast.error("Error in Signup")
    }
    reset();


  }


  return (
    <div className='absolute z-10  h-full w-full bg-[#00000090] flex justify-center items-center'>
      <form onSubmit={handleSubmit(currentState === "Login" ? LoginSubmit : SignupSubmit)} className='w-80 relative bg-white text-black flex flex-col items-center justify-center gap-6 py-6 px-8 rounded-md text-sm transition-opacity duration-1000'>
        <div>
          <h2 className='text-2xl font-semibold'>{currentState}</h2>
          <img className='absolute right-4 top-4' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='space-y-3'>
          {currentState === "Login" ? <></> : <input type="text" {...register("name")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' placeholder='Your name' required />}
          <input {...register("email")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="email" placeholder='Your email' required />
          <input {...register("password")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="password" placeholder='Password' required />
        </div>
        <button className='py-2 px-4 bg-orange-500 w-full text-white rounded-lg'>{currentState === "Sign up" ? "Create account" : "Login"}</button>
        {
          currentState === "Login"
            ? ""
            : <div className='flex gap-2'>
              <input {...register("condition", { required: currentState === "Sign up" })} type="checkbox" required />
              <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        }
        <div>
          {
            currentState === "Login"
              ? <p className='font-semibold'>Create a new account? <span className='cursor-pointer text-blue-500' onClick={() => setCurrentState("Sign up")}>Click here</span></p>
              : <p className='font-semibold'>Already have an account? <span className='cursor-pointer text-blue-500' onClick={() => setCurrentState("Login")}>Login here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
