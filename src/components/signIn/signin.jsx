import React from "react";
// import './signup.css';
import SignupImage from "../../images/image 4.png";
import Dogo from '../../images/didaylogo.jpg';
import { Link } from "react-router-dom";


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

    <div className="flex h-screen">
      {/* Left side with image */}
      <div className="flex-1  flex items-center justify-center  w-1/4">
        <img src={SignupImage} alt="SignupImage" class="h-full w-full" />
      </div>

      {/* Right side with sign-up form */}
      <div className="flex-1 flex items-center justify-center bg-white   h-screen bg-['#f3f4f6'] w-3/4">
        <form className="w-3/5 max-w-sm p-8">
        <div className="mx-auto max-w-2xl text-center mb-6">
          <img className="mx-auto max-w-[200px]" src={Dogo} alt="DidayLogo" />
        </div>
         
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1" ></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Username / Email Address"
              className="w-full border px-3 py-2 rounded text-center"
              required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full border px-3 py-2 rounded text-center"
              required />
          </div>
       

           {/* Row for "Remember me," "Forget password," and "Create account" */}
           <div className="flex justify-between items-center pr-2 mb-4 text-xs">
            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" required />
              <label htmlFor="remember" className="ml-1 font-medium">remember me</label>
            </div>
            <p className="cursor-pointer font-medium">
              <Link to="/forgotpassword">forget password?</Link>
            </p>
            <p className="cursor-pointer font-medium text-[#f6c444]">
              <Link to="/signup">create account</Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full  bg-[#ffc633] text-black text-lg py-1 rounded hover:bg-[#ffc611] font-semibold f"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default signup;



