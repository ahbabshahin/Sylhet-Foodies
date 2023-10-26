import React from 'react';
import banner from '../../../Asset/banner-1.jpg'

const Banner = () => {
    return (
        <div className=" banner hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold w-80 ml-20 text-yellow-600">Hello There</h1>
            <p className="mb-5 w-3/6 ml-20 text-yellow-600">At The Tasnim Cuisine we serve beautifully executed, delicious and original dishes.But this is only the start.Through food we like to explore not just the taste but also memories and emotions.And we’d like you to come with us.</p>
            {/* <button className="pl-10 pr-10 btn text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500 ... ml-20"><a href="#menu">Explore Menu</a></button> */}
          </div>
        </div>
      </div>
    );
};

export default Banner;