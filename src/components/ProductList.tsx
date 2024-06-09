import { useEffect, useState } from "react";

interface Props{
    category: string;
}
function ProductList({category}: Props) {
    useEffect(()=> {
        console.log(category)
    },[category])

    return ( <>
    Product List: {category}
    </> );
}

export default ProductList;