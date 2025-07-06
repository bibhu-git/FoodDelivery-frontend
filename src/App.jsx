import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart.jsx'
import Placeorder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './Components/Footer.jsx'
import LoginPopup from './Components/LoginPopup.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify/Verify.jsx'
import MyOrder from './Pages/MyOrder/MyOrder.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <div className='min-h-[42vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrder/>}/>
        </Routes>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  )
}

export default App
