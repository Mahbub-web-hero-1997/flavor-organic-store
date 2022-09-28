import React, { useEffect, useState } from 'react';

const UseProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    },[])
      return (
        <div>
            <h1>lorem5</h1>
        </div>
    );
};

export {UseProduct};