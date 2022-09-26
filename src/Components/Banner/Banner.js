import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import slider from '../../images/banner/slider-1-1920x720.jpg'
import slider2 from '../../images/banner/slider-2-1920x720.jpg'
const Banner = () => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
        .then(data=>setBanners(data))
    },[])
    return (

     
            <Carousel style={{height:'calc(70px-100vh)'}}>
            {
                banners.map(banner => <div className="hero justify-start">
                    <img width={100} height={100} className='img-fluid' alt='' src={banner.img} />
                    <div className="hero-content justify-start">
                        <div className=" text-left w-1/2 m-left">
                            <h1 className="mb-5 text-5xl font-bold">{banner.title}</h1>
                            <p className='mb-5'>{ banner.detail}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>)
           }
            </Carousel> 
      
    );
};

export default Banner;