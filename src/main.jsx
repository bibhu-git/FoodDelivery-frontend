import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Components/Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <StoreContextProvider>
        <App />
     </StoreContextProvider>
  </BrowserRouter>

)
