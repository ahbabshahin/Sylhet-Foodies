import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div className='class'>
            <h2 className='text-yellow-500'>coming soon</h2>



            <div className='aa mt-10 ml-48'>

                <div className='collapse bg-base-200 size'>
                    <input type="checkbox" className="peer size" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Click me to show/hide content
                    </div>
                    {/* <img src="" alt="" /> */}
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;