import React from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useTheme } from './context/ThemeContext';
import Cart from './components/Cart';
// import {themeProvider} from './context/ThemeContext'



const App: React.FC = () => {

  const theme = useTheme();
  return (
    <>
    <div className={`${theme?.mode === 'dark'? 'bg-slate-700 text-white': 'text-black'}`}>
        <Navbar />
        <h1 className='text-black underline text-2xl'>mini E-comm project</h1>
        <Products />
        <Cart />
      </div>
    
      
    </>
  )
}

export default App;