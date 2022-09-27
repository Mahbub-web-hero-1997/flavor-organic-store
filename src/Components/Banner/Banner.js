import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import slider from '../../images/banner/slider-1-1920x720.jpg'
import slider2 from '../../images/banner/slider-2-1920x720.jpg'
import Button from '../Share/Button';
const Banner = ({children}) => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
        .then(data=>setBanners(data))
    },[])
    return (

     
        <Carousel autoPlay>
            {
                banners.map(banner => <div className="hero justify-start">
                    <img className='img-fluid' alt='' src={banner.img} />
                    <div className=" justify-start ">
                        <div className=" text-left w-1/2 m-left">
                            <h1 className="mb-5 text-xl lg:text-5xl font-bold">{banner.title}</h1>
                            <p className='mb-5'>{ banner.detail}</p>
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                </div>)
           }
            </Carousel> 
      
    );
};

export default Banner;