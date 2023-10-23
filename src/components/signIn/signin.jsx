import React from "react";
// import './signup.css';
import SignupImage from "../../images/Group 77.svg";
import Dogo from '../../images/didaylogo.jpg';
import { Link } from "react-router-dom";
import "./SignIn.css"


function signup() {
  return (
    // <div className="signup-container">
    //   <div className="image-container">
    //     <img
    //       src={SignupImage}
    //       alt="SignupImage"
    //     />
    //   </div>
    //   <div className="form-container">
    //     <form className="signup-form">
    //       <h2>Sign Up</h2>
    //       <div className="form-group">
    //         <label htmlFor="name">Name</label>
    //         <input type="text" id="name" name="name" required />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <input type="email" id="email" name="email" required />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <input type="password" id="password" name="password" required />
    //       </div>
    //       <button type="submit">Sign Up</button>
    //     </form>
    //   </div>
    // </div>

    <div className="flex signInContainer">
      {/* Left side with image */}
      <div className="flex-1  flex items-center justify-center  w-1/4">
        <img src={SignupImage} alt="SignupImage" class="h-full w-full" />
      </div>

      {/* Right side with sign-up form */}
      <div className="flex-1 flex flex-col items-center justify-center   h-screen  w-3/4">
        <h3 className="signIn">Sign in to your account</h3>
        <p className="signInP">Welcome Back</p>
        <button 
            type="submit"
            className="googleButton w-[463px] h-[60px]  py-1  hover:bg-[#87C505] "
          >
            Sign In with Google
          </button>
          <div className="container w-[463px] mt-6">
            <span className="divider"></span> 
            <span>OR</span>
            <span className="divider"></span>
          </div>

          <form action="" className="signInForm w-[463px] ">


          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1" ></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full border px-3 py-2 h-[60px] rounded-[15px]"
               />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full border px-3 py-2  h-[60px]  rounded-[15px]"
              />
          </div>

          <div className="flex justify-between items-center pr-2 mb-4 text-xs">
          
            <p className="cursor-pointer Forgotten">
              <Link to="/forgotpassword">forget password?</Link>
            </p>
           
          </div>


      


          <button 
            type="submit"
            className="googleButton w-[463px] h-[60px] bg-[#87C505] py-1  hover:bg-[#87C505] "
          > <Link to='/home'>

            Sign In 
          </Link>
          </button>
          <p className="cursor-pointer signUpP ">
              <Link to="/signup">Don’t have an account? <span>Sign Up
                </span></Link>
            </p>


          </form>

      </div>
    </div>
  );
}

export default signup;



