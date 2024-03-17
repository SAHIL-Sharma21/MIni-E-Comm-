import React from 'react'
import {useTheme} from '../context/ThemeContext'
// import { useCart } from '../context/CartContext';
// import Cart  from '../components/Cart'

const Navbar: React.FC = () => {

// const [cart , setCart] = useState<boolean>(false)

    const theme = useTheme();
    // const cart = useCart();
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
                <h1>E-Comm</h1>
                <h1>Shop</h1>
                <h1>Games</h1>
                <h1>theme : {theme?.mode}</h1>
                <h1>{theme?.mode}</h1>
                <button onClick={handleChange} className='bg-black text-white px-4 py-2 rounded-xl my-4'>Change theme </button>
           </div>
        </>
    )
}

export default Navbar;