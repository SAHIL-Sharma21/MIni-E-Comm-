//here we are going to fetch the products from the api

import React, { useEffect } from 'react'



const Products: React.FC = () => {

    // const [data, setData] = useState<response| null>(null);
    //making api call
interface response {
    data: {},
}

    //api call
const fetchData = async() => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches');
        const data: response = await response.json();
        console.log(data);
        

    } catch (error) {
        console.log(error);
    }
}

    useEffect(()=> {
        fetchData();
    }, [])


    return (
        <>
            <div>
                <h1>Store products </h1>
                <h2>data : {}</h2>
            </div>
        </>
    )
}

export default Products;