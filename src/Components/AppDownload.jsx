import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='mobile-app' className='mx-auto my-auto text-center py-16 md:py-28 w-full md:w-[40rem]'>
      <h1 className='text-xl md:text-4xl font-semibold'>For Better Experience Download Tomato App</h1>
      <div className='flex justify-center gap-3 mt-6'>
        <img className='h-11 md:w-36 hover:scale-110 delay-75' src={assets.play_store} alt="" />
        <img className='h-11 w-36 hover:scale-110 delay-75' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
