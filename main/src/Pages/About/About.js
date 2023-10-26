import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>


        <>
          <div className="about relative sectiontwo">
            <div className="absolute inset-x-0 bottom-0">
              <svg
                viewBox="0 0 224 12"
                fill="currentColor"
                className="w-full -mb-1 text-white"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
              </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  About Tasnim Cuisine
                  <br className="hidden md:block" />
                  <span className="relative inline-block px-2">
                    <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                    <span className="relative text-teal-900"></span>
                  </span>
                </h2>
                <p className="mb-6 text-base text-white md:text-lg">
                <span className='mb-3'>A perfect hangout place with your family & friend . We try to serve the best quality delicious food with no compromise.</span> <br />
                  Address: 600 Blue Amphitheatre Parkway, Mountain View, Boteshwar, Beside Metropolitan University <br />
                  Mob: +8801712345623<br />
                  Email: support@tasnimcuisin.net <br />
  
                </p>
  
  
              </div>
            </div>
          </div>
        </>
  
      </div>
    );
};

export default About;