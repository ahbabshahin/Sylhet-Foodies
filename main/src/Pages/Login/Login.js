import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../Asset/login-logo.jpg'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className='sectiontwo'>
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-[450px] mr-32'>
            <img src={img} alt="" />
        </div>


            <div className='w-96 p-7  border-2'>
                <h2 className='text-xl text-center text-white'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs text-black" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-x">
                        <label className="label text-white"> <span className="label-text text-white">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs text-black" />
                        <label className="label"> <span className="label-text text-white">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-outline w-full text-white' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p  className='text-white'>New to this website <Link className=' text-gray-200 ' to="/signup">Create new Account</Link></p>

                {/* <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
            </div>
        </div>
    </div>
    );
};

export default Login;