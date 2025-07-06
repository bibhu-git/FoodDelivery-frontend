import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import { food_list } from '../../assets/assets';
import axios from 'axios';
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = " https://fooddelivery-backend-8r6p.onrender.com";
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState(null);
  const [food_list, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);

  }
  useEffect(() => {
    const loadData = async () => {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await fetchCartData(localStorage.getItem("token"));
      }
      await fetchFoodList();
      
    }
    loadData();
  }, []);

  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    }
    else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } })
    }

  }
  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } })
    }

  }
  const fetchCartData = async (token) => {
    const response = await axios.get(`${url}/api/cart/get`,{headers: {token}})
    console.log("Cart Data:", response.data);
    if (!response.data.success) {
      console.error("Failed to fetch cart data:", response.data.error);
      return;
    }
    setCartItem(response.data.cartData);
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {

        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += (itemInfo.price * cartItem[item]);
        }
      }

    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
