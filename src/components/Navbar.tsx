import React from 'react'
import {useTheme} from '../context/ThemeContext'

const Navbar: React.FC = () => {

    const theme = useTheme();

    // const handleChange = (e : React.MouseEvent<HTMLElement>) => {
    //     // console.log(e);
    //     theme?.setMode(theme.mode === 'light'? "dark" : 'light');
    // }

    const handleChange = () => {
        // console.log(e);
        theme?.setMode(theme.mode === 'light'? "dark" : 'light');
    }

    return (
        <>
           <div className={`w-full  min-h-10  flex flex-col sm:flex-row  sm:gap-4  ${theme?.mode === "dark"? 'bg-slate-800 text-white' : 'bg-red-400 text-black'}`}>
                <h1>this is list 1</h1>
                <h1>This is list 2</h1>
                <h1>This is list 3</h1>
                <h1>Thisa is list 4</h1>
                <h1>theme : {theme?.mode}</h1>
                <h1>{theme?.mode}</h1>
                <button onClick={handleChange} className='bg-black text-white px-4 py-2 rounded-xl my-4'>Change theme </button>
           </div>
        </>
    )
}

export default Navbar;