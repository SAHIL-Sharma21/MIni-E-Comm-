import React from 'react'
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <h1 className='text-violet-400 underline text-2xl'>mini E-comm project</h1>
      </div>
    </>
  )
}

export default App;