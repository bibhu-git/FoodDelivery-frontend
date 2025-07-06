import React, { useContext , useEffect} from 'react'
import { StoreContext } from '../../Components/Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import {toast} from 'react-toastify'

const Placeorder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, url } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!token)
    {
      toast("Login First")
      navigate('/cart')
    }
    else if( getTotalCartAmount() === 0)
    {
      toast("Cart is empty")
      navigate('/cart')
    }
  }, [token])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    
    let orderItem = [];
    food_list.map((item) => {
      if(cartItem[item._id] > 0)
      {
        let itemInfo = item;
        itemInfo['quantity'] = cartItem[item._id];
        orderItem.push(itemInfo);
      }
    })
    console.log(orderItem);
    let orderData = {
      address: data,
      items: orderItem,
      amount: getTotalCartAmount() + 2
    }
    let response = await axios.post(url+'/api/order/place',orderData,{headers:{token}})
    if(response.data.success)
    {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className='flex items-start justify-between gap-12 mt-10 p-20'>
      <div  className='space-y-2'>
        <p className='text-2xl font-semibold'>Delivery Information</p>
        <div className='flex gap-2'>
          <input required {...register("firstname")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='First name' />
          <input required {...register("lastname")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='Last name' />
        </div>
        <input required {...register("email")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="email" placeholder='Email address' />
        <input required {...register("street")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='Street' />
        <div className='flex gap-2'>
          <input required {...register("city")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='City' />
          <input required {...register("state")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='State' />
        </div>
        <div className='flex gap-2'>
          <input required {...register("zipcode")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='Zip code' />
          <input required {...register("country")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='Country' />
        </div>

        <input required {...register("phone")} className='p-2 border w-full border-gray-300 rounded-lg focus:outline-none' type="text" placeholder='Phone' />
      </div>
      <div>
        <div className='space-y-3'>
          <h2 className='text-2xl font-semibold'>Cart Totals</h2>
          <div className='w-[40rem] flex justify-between'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='flex justify-between'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div><hr />
          <div className='flex justify-between'>
            <b className='text-lg font-semibold'>Total</b>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <div className='mt-10'>
            <button className='py-2 px-4 text-white bg-orange-500 rounded-md'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
