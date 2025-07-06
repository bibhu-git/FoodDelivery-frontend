import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from './Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItem,addToCart,removeFromCart,url} = useContext(StoreContext);
 
  return (
    <div className='w-full m-auto rounded-2xl shadow-md transition-opacity duration-1000'>
      {/* image container */}
      <div className='relative'>
        <img src={url+'/image/'+image} alt="" />
        {!cartItem[id]
          ? <img className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white} />
          : <div className='absolute font-semibold bg-white bottom-4 right-4 flex items-center gap-3 p-1 rounded-[50px]'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      {/* food item info */}
      <div className='p-5'>
        {/* rating */}
        <div className='flex justify-between items-center mb-3'>
          <p className='text-lg font-semibold'>{name}</p>
          <img className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        {/* description */}
        <p className='text-[#676767] text-sm'>{description}</p>
        <p className='text-orange-500 text-xl font-semibold my-3'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
