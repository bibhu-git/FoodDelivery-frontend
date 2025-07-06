import React from 'react'

const Header = () => {
  return (
    <div className='bg-header-image h-[28rem] lg:h-[32rem] text-white bg-cover  mt-10 relative' >
      <div className='absolute bottom-[10%] left-[6vw] max-w-[60%] lg:max-w-[50%] flex flex-col items-start gap-[1.5vw]'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Order your favourite food herer</h2>
        <p className='text-sm md:text-lg'>Choose  from a divese menu featuring a delectable array of dishes crafted with the finest ingredients adn culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience. One delicious meal at a time.</p>
        <button className='p-2 mt-2 hover:bg-blue-500 hover:text-white px-4 bg-white text-black rounded-3xl'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
