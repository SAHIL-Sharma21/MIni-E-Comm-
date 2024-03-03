import React from 'react'

const Navbar: React.FC = () => {
    return (
        <>
           <div className='w-full bg-slate-700 min-h-10 sm:bg-red-400 flex flex-col sm:flex-row  sm: gap-4'>
                <h1>this is list 1</h1>
                <h1>This is list 2</h1>
                <h1>This is list 3</h1>
                <h1>Thisa is list 4</h1>
                <h1>This is list 5</h1>
           </div>
        </>
    )
}

export default Navbar;