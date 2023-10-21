import React from 'react'
import Dogo from '../../../images/everything.png';
import "./ImageNav.css"


export const ImageNav = () => {

    return (
        <div className='imageDiv  mt-7'>
        <div className='image-container '>
            <img className="rounded-[15px] h-[300px] w-full"  src={Dogo} alt="DidayLogo" />
            <div className='ImageBack   border-solid border-2 border-blue-400'>
                 <p className=' text-white text-[38px] font-bold whitespace-nowrap text-end'>Everything you want in one place</p>
               <div className='posIma mt-2 text-center '>
                    <button className='Imagebtn'>Buy Now</button>
                    <button className='ImageSell'>Sell Now</button>
                </div>
            </div>
        </div>
    </div>
     
    )
}
