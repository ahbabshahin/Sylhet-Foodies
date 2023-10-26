import React from 'react';
import img from '../../Asset/home.png'

const Food = () => {
    return (
        <div>

            <div className='text-center mt-5 mb-10'>
                <select className="select select-secondary w-full max-w-xs">
                    <option disabled selected>Pick your favorite Food</option>
                    <option>Kacchi</option>
                    <option>pizza</option>
                    <option>burger</option>
                    <option>ice-cream</option>
                    <option>sea food</option>
                    <option>noodles</option>
                    <option>fuska</option>
                    <option>Pasta</option>
                    <option>Home made</option>
                </select>
            </div>



            <div className='grid pt-28 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96  shadow-xl bg-slate-500">
                    <figure><img className='w-72 h-72' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2> */}
                        <p className='text-3xl font-bold'>Food Name : <span className='text-2xl font-semibold'>Burger</span></p>
                        <div className="card-actions justify-end mt-5">
                            <div className="badge badge-outline">Price - 100</div>
                            <div className="badge badge-outline">Rating - 5.0</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96  shadow-xl bg-slate-500">
                    <figure><img className='w-72 h-72' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2> */}
                        <p className='text-3xl font-bold'>Food Name : <span className='text-2xl font-semibold'>Burger</span></p>
                        <div className="card-actions justify-end mt-5">
                            <div className="badge badge-outline">Price - 100</div>
                            <div className="badge badge-outline">Rating - 5.0</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96  shadow-xl bg-slate-500">
                    <figure><img className='w-72 h-72' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2> */}
                        <p className='text-3xl font-bold'>Food Name : <span className='text-2xl font-semibold'>Burger</span></p>
                        <div className="card-actions justify-end mt-5">
                            <div className="badge badge-outline">Price - 100</div>
                            <div className="badge badge-outline">Rating - 5.0</div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Food;