//here we are going to fetch the products from the api

import React, { useState } from 'react'
import {useTheme} from '../context/ThemeContext';
import {useCart} from '../context/CartContext'

const Products: React.FC = () => {


        //using theme
    const theme = useTheme();

    const [data, setData] = useState<Product[]| null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    // const [cartItem, setCartItem] = useState<Cart[] | null>(null);
    //making api call
    // i wqs not able to think thiss >>>> learning no1
interface Product {
    category: string,
    price: number,
    thumbnail: string,
    images: string[],
    title: string,
    id: number
}


    //api call
// const fetchData = async() => {
//     try {
//         const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches');
//         const data: response = await response.json();
//         console.log(data);
        

//     } catch (error) {
//         console.log(error);
//     }
// }

// let fetchData: () => void;
//     useEffect(()=> {
//          fetchData = async(): Promise<void> => {
//             try {
//                 const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches');
//                 const data = await response.json();
//                 // console.log(data.data.data[2]); 
//                 setData(data.data.data);  
//             } catch (error) {
//                 console.log('Error making request:', error);
//             }
//         }
//         // fetchData();
//         // return fetchData;
//         // return () => console.log('useeffect returns');
//     }, [])

//making seperate function to make api call >> its better to cal the data outside
const fetchData = async ():  Promise<void> => {
    setIsLoading(true);
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=20&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid');
        const data = await response.json();
        setData(data.data.data);
    } catch (error) {
        setError('Error making request')
    } finally {
        setIsLoading(false);
    }
};

// useEffect(() => {
//     fetchData();
// }, []);


    //handling button when user click then it will show products
    const showProducts = () => {
        // console.log(e);
        {isLoading && <h1>Loading data ....</h1>}
        fetchData();
    }

//clearing data
const clearData = () => {
    setData(null);
}

const cart = useCart();//importing useCart Hook

const addPrice = (title: string, price: number, id: number) => {
    // console.log('data added');  
    cart?.setItems([...cart.items, {title, price, id}]);
}


    return (
        <>

           
            <div className={` ${theme?.mode === "dark"? 'bg-gray-700 text-white' : 'bg-white'} flex flex-col  justify-center items-center`}>
                <h1 className={`${theme?.mode === "dark"? 'bg-gray-700 text-red-500' : 'text-black'} items-center text-xl mb-2`}>Store products </h1>
                <div className='flex flex-col  items-center justify-between'>
                    {/* looping  through array if data is present then it will render  */}
                    {error && <h1>Error loading data...</h1>}
                    

                    
                     
                            <div className='w-3/4 flex flex-col align-middle items-center gap-2'>
                                    {data && data.map((prod: Product) => (
                                                <div className='mx-3 py-2 mt-5' key={prod.id}>
                                                    <div className=' flex flex-col bg-slate-500 rounded-md p-4'>
                                                        <img src={prod.thumbnail} alt={prod.title} className='rounded-md h-[60%] w-[100%]' />
                                                        <h2 className='text-2xl'>{prod.title}</h2>
                                                        <div className='flex flex-row justify-between'>
                                                            <p className='text-lg'>{prod.category}</p>
                                                            <p className='text-2xl  font-bold'> {`$${prod.price}`}</p>
                                                        </div>
                                                        <button className='bg-orange-400 rounded-md py-2 px-4 hover:bg-orange-300' onClick={() => addPrice(prod.title, prod.price, prod.id)}>Add to cart</button>
                                                    </div>
                                                </div>
                                    ))}
                                    {/* <button>{data && data.map((cat: Product) => (<h2>{cat.category}</h2>))}</button> */}
                                    {/* nakde this to conditional rendering  */}
                                
                                    {/* <button onClick={showProducts} className='bg-violet-800 text-white rounded hover:bg-violet-500 transition hover:ease-out m-6 px-6 py-2'>show products</button> */}
                            </div>


                </div>
            </div>
            {data ? <button onClick={clearData} className='bg-violet-800 text-white rounded hover:bg-violet-500 transition hover:ease-out m-6 px-6 py-2 absolute top-32 right-1'>clear data</button> : <button onClick={showProducts} className='bg-violet-800 text-white rounded hover:bg-violet-500 transition hover:ease-out m-6 px-6 py-2 absolute top-32 right-1'>show products</button>}
        </>
    )
}

export default Products;