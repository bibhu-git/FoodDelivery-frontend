import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay';
import AppDownload from '../../Components/AppDownload';

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div id='home' className='container px-8 lg:px-20 mx-auto'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
