import React from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';
// import {themeProvider} from './context/ThemeContext'

const App: React.FC = () => {
  return (
    <>
    <div>
        <Navbar />
        <h1 className='text-violet-400 underline text-2xl'>mini E-comm project</h1>
        <Products />
      </div>
    
      
    </>
  )
}

export default App;