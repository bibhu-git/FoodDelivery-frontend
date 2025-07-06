import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Components/Context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrder = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);
  
    const fetchOrders = async () => {
        const response = await axios.post(url+'/api/order/userorders',{},{headers:{token}})
        setData(response.data.data);
        console.log(response.data.data)
    }
    useEffect(() => {
        if(token)
        {
            fetchOrders();
        }
    },[token])
  return (
    <div className='mx-12 my-4'>
      <div className='flex flex-col gap-5 mt-8'>
      <h2 className='text-2xl font-semibold'>My Orders</h2>
        {data.map((order,index) => {
            return (
                <div key={index} className='my-orders-order border border-orange-500 py-3 px-5 items-center gap-7 text-sm text-[#454545]'>
                    <img className='w-12' src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if(index === order.items.length -1)
                        {
                            return item.name+" x " + item.quantity
                        }
                        else{
                            return item.name+" x " + item.quantity + ", "
                        }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>items:{order.items.length}</p>
                    <p className='flex gap-1'><span className='text-orange-500'>&#x25cf;</span> <p className='font-semibold'>{order.status}</p></p>
                    <button onClick={fetchOrders} className='py-3 rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545]'>Track Order</button>
                </div>
            )
        })
        }
      </div>
    </div>
  )
}

export default MyOrder
