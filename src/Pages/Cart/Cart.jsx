import React, { useContext } from 'react'
import { StoreContext } from '../../Components/Context/StoreContext'
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  return (
    <div className='py-24 mx-20'>
      <div>
        <div className='cart-item-title text-gray-500'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0)
            return (
              <div key={index}>
                <div className='cart-item-title text-black my-3'>
                  <img className='w-12' src={url+'/image/'+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>X</p>
                </div>
                <hr />
              </div>
            )
        })

        }
      </div>
      <div className='flex justify-between mt-28'>
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
          <div className='py-5'>
            <Link to={'/order'} className='py-2 mt-5 px-4 text-white bg-orange-500 rounded-md'>PROCEED TO CHECKOUT</Link>
          </div>
        </div>
        <div>
          <p className='text-lg'>If you have a promo code. Enter it here</p>
          <div className='flex mt-2 gap-2'>
            <input placeholder='promo code' className='p-2 border w-96 border-gray-300 rounded-md focus:outline-none' type="text" required />
            <button className='bg-black rounded-md text-white p-2'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
