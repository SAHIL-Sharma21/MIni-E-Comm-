//here we are going to fetch the products from the api

import React, { useEffect, useState } from 'react'



const Products: React.FC = () => {

    const [data, setData] = useState<Product[]| null>(null);
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

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches');
                const data = await response.json();
                // console.log(data.data.data[2]); 
                setData(data.data.data);  
            } catch (error) {
                console.log('Error making request:', error);
            }

        }
        fetchData();
    }, [])


    return (
        <>
            <div>
                <h1>Store products </h1>
                    {/* looping  through array if data is present then it will render  */}
                    {data && data.map((prod: Product) => (
                        <div key={prod.id}>
                            <h2>{prod.title}</h2>
                            <p>{prod.category}</p>
                            <p>{prod.price}</p>
                            <img src={prod.thumbnail} alt={prod.title} />
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Products;