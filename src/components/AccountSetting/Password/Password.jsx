import React, {useState} from 'react'
import { NavBar } from '../../Nav/NavBar/NavBar';
import Account from '../../../images/account.png';
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';


const UpdateProfile = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


  return (
    <div className='h-[600px]'>

        <NavBar />

        <div className='overflow-hidden  shadow max-w-[600px] h-[435px] bg-white rounded-[15px] mx-auto mt-[40px] shadow-4 shadow-y-10 shadow-blur-10 shadow-spread-10 shadow-black'>

            <div className='flex overflow-hidden'>
                    <div className=' overflow-hidden w-[200px] h-[435px] border border-stone-400 rounded-l-lg '>
                        <div className=' w-[150px] items-center mx-auto  mt-4'>

                        <h1 className='text-zinc-950 text-lg font-bold mt-2 '>Account Settings</h1>

                            <img src={Account} alt="" className='w-[100px] h-[100px] rounded-full mt-4 mx-auto'  />
                            <p className='mt-2 mx-auto text-xs text-center hover:font-bold'>Change Picture</p>

        
                          
                            <h2 className='text-sm  ml-4 mt-3  font-semibold hover:font-bold '><Link to="/profile"> Update Profile</Link></h2>
                            <h2 className='text-sm w ml-4 mt-3 font-semibold hover:font-bold'>  <Link to="/password">Change Password</Link></h2>
                            <h2 className='text-sm ml-4 mt-3 font-semibold hover:font-bold'>Log Out</h2>

                        </div>

                    </div>
                    <div>


                        <div className='overflow-hidden w-[400px] h-[0px] border  border-stone-400 mt-[50px]'></div>
                      
                        <form action="" className=" w-[330px] mx-auto mt-5 items-center ">
 
 
  <div className="mb-4 font-semibold">
   <label htmlFor="">Email Address </label>
    <input
      type="email"
      id="name"
      name="name"
      placeholder="Email@gmail.com"
      className="w-full border px-3 py-2 h-[40px] rounded-[5px]"
      required
    />
  </div>
  <div className="mb-4 font-semibold relative">
      <label htmlFor="">Old Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          placeholder="•••••••••"
          className="w-full border px-3 py-2 h-[40px] rounded-[5px] pr-8"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className=" text-[#868686] absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
      </div>
    </div>
 


  <div className="mb-4 font-semibold relative">
      <label htmlFor="">New Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          placeholder="•••••••••"
          className="w-full border px-3 py-2 h-[40px] rounded-[5px] pr-8"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-[#868686]  absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
      </div>
    </div>
    
 






  <button
  type="submit"
  className="text-center ml-[229px] border border-yellow-700 text-white text-xs w-[100px] h-[35px] rounded-[11px] bg-[#87C505] py-1 mt-3 hover:bg-[#87C505]"
>
  Save Changes
</button>




  {/* <p className="cursor-pointer signUpP">
    <Link to="/">
    Already have an account?  <span>Sign In</span>
    </Link>
  </p> */}
</form> 


                    </div>
            </div>

        </div>
    </div>
  )
}

export default UpdateProfile