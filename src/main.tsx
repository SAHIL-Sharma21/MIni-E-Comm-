import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from './context/ThemeContext.tsx'
import {CartProvider} from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
   </CartProvider>      
  </React.StrictMode>,
)
