import React from 'react'
import Dogo from '../../../images/everything.png';
import "./ImageNav.css"


const ImageNav = () => {
    return (
        <div className='ImageContainer' >
            <div className=''>

            <img className="w-100%  love" src={Dogo} alt="DidayLogo" />
            <div className='Imageposition'>
                <p className='imageH1 mb-8'>Everything you want in one place</p>
               
               <div className='posIma'>

                <button className='Imagebtn'>Buy Now</button>
                <button className='ImageSell'>Sell Now</button>
                </div> 

            </div>
            </div>
        </div>
    )
}

export default ImageNav