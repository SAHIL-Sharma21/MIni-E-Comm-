import React from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useTheme } from './context/ThemeContext';
// import Cart from './components/Cart';
import { useCart } from './context/CartContext';
import Cart from './components/Cart';
// import {themeProvider} from './context/ThemeContext'



const App: React.FC = () => {

  const theme = useTheme();
  const cart = useCart();

  return (
    <>
    <div className={`${theme?.mode === 'dark'? 'bg-slate-700 text-white': 'text-black'} pb-4 gap-y-2`}>
        <Navbar />
        <h1 className='text-black underline text-2xl'>mini E-comm project</h1>
        <Products />
        {/* {cart ? <Cart /> : null} */}
        {cart?.items.length !== 0 ? <Cart/> : null}
      </div>
    
      
    </>
  )
}

export default App;