import React from 'react'
import { Link } from 'react-router-dom'
import "./SigninAndSignup.css"
function Signup() {
  return (
    <div className='body'>
      <div className="container pt-16">
        {/* Sign up section start here  */}
        <div className="form signup">
          <h2 className='h2'>Sign UP</h2>
          <div className="inputBox">
            <input className="input" type="text" required="required" />
            <i className="fa-regular fa-user i" />
            <span className="span">Username</span>
          </div>
          <div className="inputBox">
            <input className="input" type="text" required="required" />
            <i className="fa-regular fa-envelope i" />
            <span className="span">Email Address</span>
          </div>
          <div className="inputBox">
            <input className="input" type="text" required="required" />
            <i className="fa-solid fa-lock i" />
            <span className="span">Create Password</span>
          </div>
          <div className="inputBox">
            <input className="input" type="text" required="required" />
            <i className="fa-solid fa-lock i" />
            <span className="span">Confirm Password</span>
          </div>
          <div className="inputBox">
            <input className="submit input" type="submit" defaultValue="Create An Account" />
          </div>
          <p className='p'>Already have an account? <Link to="/login" className="login a">Log in</Link></p>
        </div>
        {/* Sign up section end here  */}
      </div>
</div>

  )
}

export default Signup