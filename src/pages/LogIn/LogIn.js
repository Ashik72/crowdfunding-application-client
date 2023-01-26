import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LogIn() {
  const {register, formState: { errors }, handleSubmit} = useForm();
  
  const handleLogin = data => {
    console.log(data);
  }

  return (
    <div className='h-[800px] flex justify-center items-center py-40 relative'>
            <div className="w-full h-36 absolute top-0 right-0" style={{ background: "linear-gradient(#0c0c0c9c,#0c0c0c80, #0c0c0c08)" }}>

        </div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1674500131~exp=1674500731~hmac=7a91e482fe60d8f0f3595e865b3677f378a6d5a4c9dbe54e4d25616faafadf50" className="max-w-xl rounded-lg shadow-2xl" alt='loginPhoto' />
    <div>
    <div className='w-96 p-7'>
        <h1 className='text-4xl font-bold text-center text-blue-600'>Login Now</h1>
        {/* React form hook starts here  */}
        <form onSubmit={handleSubmit(handleLogin)}>

{/* Email input field  */}
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">Email</span>
  </label>
  <input type="text"  {...register("email", {required: "Email address is required"})} className="input input-bordered input-accent w-full max-w-xs"/>
  {errors.email && <p className='text-red-600 font-semibold'>{errors.email?.message}</p>}
</div>

{/* Password input field here  */}
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">Password</span>
  </label>
  <input type="password"  {...register("password", {required: "Password is required", minLength: {value: 6, message: 'Password must be 6 characters or longer'}})} className="input input-bordered input-accent w-full max-w-xs"/>

  {errors.password && <p className='text-red-600 font-semibold'>{errors.password?.message}</p>}

  <label className="label">
    <span className="label-text">Forget Password?</span>
  </label>
</div>

      <input className='btn btn-active btn-accent text-xl w-full my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-700-focus duration-300' value='Log in' type="submit" />
    </form>
    {/* React form hook ends here  */}
    <p className='text-sm'>New to AidHumans? <Link className='text-primary' to='/signup'>Create an new account</Link></p>
    <div className='divider'>OR</div>
    <button className="btn btn-outline btn-secondary w-full font-bold">Continue with Google</button>
    <button className="btn btn-outline btn-primary w-full font-bold mt-3">Continue with Facebook</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default LogIn;