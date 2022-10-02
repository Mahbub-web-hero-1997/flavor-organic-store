import React from 'react';
import Button from'../Share/Button'
import { GiSelfLove, IconName } from "react-icons/gi";

const Product = ({product}) => {
   
    const { id, name, img, detail, price, availability } = product;
  
    return (
        <div data-aos="zoom-in" className='bg-secondary p-3 rounded-sm'>
            <img className='min-h-sm' src={img} alt="" />
            <div className='text-black text-left'>
                <h5 className=' font-semibold mb-2'>{name}</h5>
                <p className='mb-1'><b>Price: </b>${price}</p>
                {/* <p className='mb-1'><b>Availability:</b> {availability}</p>
                <p className='mb-2'>{detail.slice(0, 100)}</p> */}
                <div className='flex justify-between items-center'> <Button>Buy Now</Button>
                    <button title='Add to cart' className='btn btn-primary'><GiSelfLove className='text-3xl text-white' /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;