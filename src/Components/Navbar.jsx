import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { StoreContext } from './Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount,token,setToken} = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  }

  return (
    <div>
      <div className='flex items-center justify-between px-10 lg:px-20 h-16'>
        <Link to={'/'}><img className='h-5 md:h-6 lg:h-8' src={assets.logo} alt="" /></Link>
        {/* menu */}
        <ul className='hidden md:flex gap-4 lg:gap-6 font-semibold '>
          <ScrollLink to="home" smooth={true} duration={500} onClick={() => setMenu("home")} className={`cursor-pointer ${menu == 'home' ? `border-b-2 pb-px border-black` : ''}`}>home</ScrollLink>
          <ScrollLink to="menu" smooth={true} duration={500} onClick={() => setMenu("menu")} className={`cursor-pointer ${menu == 'menu' ? `border-b-2 pb-px border-black` : ''}`}>menu</ScrollLink>
          <ScrollLink to="mobile-app" smooth={true} duration={500} onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu == 'mobile-app' ? `border-b-2 pb-px border-black` : ''}`}>mobile-app</ScrollLink>
          <ScrollLink to="contact-us" smooth={true} duration={500} onClick={() => setMenu("contact-us")} className={`cursor-pointer ${menu == 'contact-us' ? `border-b-2 pb-px border-black` : ''}`}>contact us</ScrollLink>
        </ul>
        {/* navbar-right */}
        <div className='flex gap-4 md:gap-6 items-center'>
          <img className='w-5 md:w-8' src={assets.search_icon} alt="" />
          <div className='relative'>
            <Link to={'/cart'}><img className='w-5 md:w-8' src={assets.basket_icon} alt="" /></Link>
            {getTotalCartAmount() !== 0 ? <div className='absolute min-h-3 min-w-3 bg-orange-500 top-[-10px] right-[-10px] rounded-md'></div> : ""}
          </div>
          {!token ? <button onClick={() => setShowLogin(true)} className='p-1 md:p-2 font-semibold px-3 md:px-4 border hover:bg-orange-500 delay-100 hover:text-white border-gray-300 rounded-2xl'>Sign in</button>
           : <div className='relative group'>
            <img className='' src={assets.profile_icon} />
            <div className='pt-2'>
            <ul className='absolute z-10 bg-white right-[-80px] hidden  group-hover:flex flex-col gap-2 border-2 border-orange-500 py-3 px-6'>
              <li><Link to={'/myorders'} className='flex items-center cursor-pointer gap-2 justify-center'><img className='w-5' src={assets.bag_icon} alt="" /><p>Orders</p></Link></li>
              <hr />
              <li onClick={logout} className='flex items-center cursor-pointer gap-2 justify-center'><img className='w-5' src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
            </div>
           </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
