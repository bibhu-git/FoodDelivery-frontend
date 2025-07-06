import React, { useContext } from 'react'
import { StoreContext } from './Context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  
  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold'>Top dishes near you</h2>
      <div className='food-display-list'>
        {
          food_list.map((item, index) => (
            (category === "All" || category === item.category) && (
              <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            )
          ))
        }
      </div>
    </div>
  )
}

export default FoodDisplay
