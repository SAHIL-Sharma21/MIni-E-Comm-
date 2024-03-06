import React from 'react'
import {useTheme} from '../context/ThemeContext'
import { IoSunny } from "react-icons/io5";
import { GiMoon } from "react-icons/gi";

const Navbar: React.FC = () => {

    const theme = useTheme();

    const handleChange = (e : React.MouseEvent<HTMLElement>) => {
        console.log(e);
        theme?.setMode("Dark");
    }


    //creating navItems Arrays to render the list
    const navItems: string[] = [
        "Home",
        "Shop by Catagoery",
        "Mobiles",
        "Laptops",
        "Watches"
    ]    

    return (
        <>
        <div className='flex sm:justify-around w-full bg-slate-700 flex-col justify-center sm:flex-row sm:bg-red-400 '>
            <div className='w-full bg-slate-700 min-h-10 sm:bg-red-400 flex flex-col  sm:flex-row  sm: gap-4'>
                {navItems.map((item: string) => (
                    <ul key={item.indexOf(item)} className='flex justify-evenly mx-7 my-7'>
                        <li className='cursor-pointer font-sans  font-semibold'>{item}</li>
                    </ul>
                ))}
            </div>
            <button className='align-middle justify-center' onClick={handleChange}> {theme?.mode === "Light" ? <GiMoon size={"30px"}  className= 'my-8 mx-8 sm:mr-10'/> : <IoSunny size={"30px"}  className='my-8 mx-8 sm:mr-10'/>}  </button>
            
        </div>

        </>
    )
}

export default Navbar;