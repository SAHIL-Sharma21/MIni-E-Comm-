import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from './context/ThemeContext.tsx'
import {CartProvider} from './context/CartContext.tsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Products from './components/Products.tsx'
import Cart from './components/Cart.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='/product' element={<Products />}/>
        <Route path='/cart' element={<Cart />}/>
      </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
   </CartProvider>      
  </React.StrictMode>,
)
