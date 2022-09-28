import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner from '../../images/banner/banner-service-691x470.jpg'

import Button from '../Share/Button';
const Banner = ({children}) => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
        .then(data=>setBanners(data))
    },[])
    return (
    
        <>
            <Carousel autoPlay >
                {
                    banners.map(banner => <div className="hero justify-start">
                        <img className='img-fluid' alt='' src={banner.img} />
                        
                       
                        <div  className=" justify-start ">
                                <div className=" text-left w-1/2 m-left">
                                    <h1 className="mb-5 text-xl lg:text-5xl font-bold">{banner.title}</h1>
                                    <p className='mb-5'>{banner.detail}</p>
                                    <Button>Shop Now</Button>
                                </div>
                            </div>
                      
                    </div>)
                }
            </Carousel> 
 
            <div className="hero min-h-screen w-full lg:w-11/12">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={banner} className=" w-full lg:w-1/2" />
                    <div data-aos="fade-left" className='w-full lg:w-1/2 text-left'>
                        <h5 className='text-accent uppercase tracking-wider '>-organic fruits store-</h5>
                        <h1 className="text-5xl font-bold">Organic Fruits</h1>
                        <p className="py-6 text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Read more</Button>
                    </div>
                </div>
                </div>
            
        </>
      
    );
};

export default Banner;