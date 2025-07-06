import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div id='menu' className='mt-8'>
            <div className='w-full md:max-w-[60%]'>
                <h1 className='text-3xl font-semibold my-2'>Explore our menu</h1>
                <p className='my-4'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your varvins and elevate your dining experience. One delicious meal at a time.</p>
            </div>
            <div className='flex cursor-pointer justify-between overflow-x-auto gap-5 md:gap-8 items-center'>
                {
                    menu_list.map((item, index) => (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index}>
                            <img className={`w-16 md:w-24 ${category === item.menu_name ? 'p-1 border-4 rounded-full border-orange-500' : ''}`} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
