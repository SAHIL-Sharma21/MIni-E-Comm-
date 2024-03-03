import React from 'react'
import {useTheme} from '../context/ThemeContext'

const Navbar: React.FC = () => {

    const theme = useTheme();

    const handleChange = (e : React.MouseEvent<HTMLElement>) => {
        console.log(e);
        theme?.setMode("dark");
    }


    return (
        <>
           <div className='w-full bg-slate-700 min-h-10 sm:bg-red-400 flex flex-col sm:flex-row  sm: gap-4'>
                <h1>this is list 1</h1>
                <h1>This is list 2</h1>
                <h1>This is list 3</h1>
                <h1>Thisa is list 4</h1>
                <h1>This is list 5</h1>
                <h1>{theme?.mode}</h1>
                <button onClick={handleChange}>Change theme </button>
           </div>
        </>
    )
}

export default Navbar;