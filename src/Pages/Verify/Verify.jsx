import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Components/Context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get('success')
    const orderid = searchParams.get('orderId')
    const {url} = useContext(StoreContext)
    const navigate = useNavigate();
    const verifyPayment = async () => {
        const response = await axios.post(url+'/api/order/verify',{success,orderid})
        if(response.data.success)
        {
            navigate('/myorders')
        }
        else{
            navigate('/')
        }
    }
    useEffect(() => {
        verifyPayment();
    },[])
  return (
    <div className='min-h-[80vh] grid'>

      <div className='h-24 w-24 place-self-center border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin'>

      </div>
    </div>
  )
}

export default Verify
