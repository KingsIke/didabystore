import React from 'react'
import Dogo from '../../../images/kids.png';
import "./NavKids.css"


 const NavKids = () => {

    return (
        <div className='w-full border-collapse mt-10'>
        <div className='kidimage-container h-[220px]'>
            <img className="rounded-[15px] h-[220px]"  src={Dogo} alt="DidayLogo" />
            <div className='kidImageBack h-[99px] w-[510px] flex-col justify-center items-center '>
                 <p className=' text-white text-[38px] font-bold  text-center  text-3xl '>Show your Kids all the love they deserve <span className='break-normal'>
                 when you shop for them </span></p>
               <div className='kidposIma mt-1 text-center '>
                    <button className='Imagebtn'>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
     
    )
}

export default  NavKids
