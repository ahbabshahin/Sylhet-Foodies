import React from 'react';
import image from '../../../../Asset/banner2.png';
import './Section.css'

const Sectionone = () => {
    return (
        <div className='bg-slate-800 pt-20 sectiontwo'> 
        {/* <!-- Hero Section --> */}
        <section id="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__left" data-aos="fade-left">
                        <div className="hero__left__wrapper">

                            <h1 className="hero__heading text-5xl text-yellow-500 ">The flavor of tradition</h1>
                            <p className="hero__info text-sm mt-5 text-yellow-500">
                                We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
                                dining
                                environment.
                            </p>
                            {/* <div className="button__wrapper">
                                <a href="/specialmenu" className="btn primary-btn  text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500">Special Menu</a>
                                <a href="/reservation" className="btn ml-5  text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500">Book Table</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="hero__right" data-aos="fade-right">
                        <div className="hero__imgWrapper">
                           <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Hero Section --> */}
        
    </div>
    );
};

export default Sectionone;