import React from 'react'
import { Link } from 'react-router-dom'
import "./SigninAndSignup.css"
function Signin() {
  return (
    <div className='body'>
      <div className='container'>
        {/* Sign in section start here  */}
        <div className="form signin">
          <h2 className='h2'>Sign IN</h2>
          <div className="inputBox">
            <input className="input" type="text" required="required" />
            <i className="fa-regular fa-user i" />
            <span>Username</span>
          </div>
          <div className="inputBox">
            <input className="input" type="text" required="required" />
            <i className="fa-solid fa-lock i" />
            <span>Password</span>
          </div>
          <div className="inputBox">
            <input className="submit input" type="submit" defaultValue="Login" />
          </div>
          <p className='p'>Not registered yet? <Link href="#" className="create a">Create an Account</Link></p>
        </div>
        {/* Sign in section end here  */}
      </div>
</div>
  )
}

export default Signin