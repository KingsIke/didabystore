import React from 'react'
import { NavBar } from '../../Nav/NavBar/NavBar';
import Dogo from '../../../images/productNav.png'
import { AiOutlineSearch } from "react-icons/ai";
import "./NavPage.css"
import ProductButton from '../ProductButton/ProductButton';
const NavPage = () => {
  return (
    <div>

<NavBar />
        <div className='w-full border-collapse mt-7 '>
        <div className='product-container h-[300px]'>
            <img className="rounded-[15px] w-full h-[300px]"  src={Dogo} alt="DidayLogo" />
            <div className='productImageBack h-[109px] w-[599px] flex-col justify-center items-centerborder-solid border-2 border-blue-400'>
                 <p className=' text-white text-[38px] font-bold whitespace-nowrap text-end'>Everything you want in one place</p>
               <div className='productposIma mt-2 text-center '>
               
               <div className='input-with-icon w-[520px] rounded-[10px] mt-2'>
    <AiOutlineSearch className='icon' />
    <input type='text' name='' id='' className='bg-white w-[520px] h-[30px] rounded-[10px]'  />
  </div>
                </div>
            </div>
        </div>
    </div>

<ProductButton/>
    </div>
  )
}

export default NavPage



  