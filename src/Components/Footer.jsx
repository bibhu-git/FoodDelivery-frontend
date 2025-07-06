import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-7 md:px-20 py-10 pb-1 bg-slate-800 text-white'>
            <div className='flex justify-between flex-col sm:flex-row gap-8 items-cente flex-wrap md:flex-nowrap text-gray-300'>
                {/* footer content left */}
                <div className='w-[35%] space-y-5'>
                    <img src={assets.logo} alt="" />
                    <p className='my-3 text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae voluptatibus accusamus veritatis eveniet enim sed facilis earum. Deserunt totam dolor numquam, rem quaerat .</p>
                    <div className='flex gap-5'>
                        <img className='h-8 md:h-11' src={assets.facebook_icon} alt="" />
                        <img className='h-8 md:h-11' src={assets.twitter_icon} alt="" />
                        <img className='h-8 md:h-11' src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                {/* footer context middle */}
                <div>
                    <h2 className='text-xl font-semibold'>Company</h2>
                    <ul className='space-y-2 mt-4 text-sm md:text-lg'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* footer context right */}
                <div>
                    <h2 className='text-xl font-semibold'>GET IN TOUCH</h2>
                    <ul className='space-y-1 mt-4 text-lg'>
                        <li>+1 222-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='mt-6'/>
            <p className='text-center my-2'>Copyright 2024 @tomato.com - All Right Reserverd.</p>
        </div>

    )
}

export default Footer
