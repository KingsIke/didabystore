import React from 'react'
import './SingleReview.css'
import Headset1 from '../../../images/orimo1.png'
import Headset2 from '../../../images/orimo2.png'
import Headset3 from '../../../images/orimo3.png'
import Headset4 from '../../../images/orimo4.png'
import Headset5 from '../../../images/orimo5.png'

import { NavBar } from '../../Nav/NavBar/NavBar'
const SingleReview = () => {
    return (
        <div className='mx-4'>
            <NavBar />
            <div className='SingleContainer mt-3'>

                <div className="pixGallery overflow-y-hidden">
                    <div className='border border-red-500 h-[104px] mb-[15px]'>
                        <img src={Headset1} alt="" className='h-full w-full' />

                    </div>
                    <div className='border border-red-500 h-[104px] mb-[15px]'>
                        <img src={Headset2} alt="" className='h-full w-full' />
                    </div>
                    <div className='border border-red-500 h-[104px] mb-[15px]'>
                        <img src={Headset3} alt="" className='h-full w-full' />
                    </div>
                    <div className='border border-red-500 h-[104px] mb-[15px]'>
                        <img src={Headset4} alt="" className='h-full w-full' />
                    </div>
                </div>

                <div className='singlePix rounded-[15px]'>
                    <img src={Headset5} alt="" className='h-full w-full' />

                </div>
                <div className="singleReview  ">
                    <h1 className='text-zinc-800 text-2xl font-semibold overflow-hidden'>Oriamo Headphones</h1>
                    <p className='text-neutral-700 text-2xl font-normal mt-3 overflow-hidden'>N25,000</p>
                    <p className=' mt-5 whitespace-normal text-justify w-[515px]  text-zinc-500 text-[15px] font-normal  border border-red-500'>ORIAMO Boomplay Headset features include BT5.0, memory card
                        <br />support, AUX input, Led light show, strong bass, HD audio, soft
                        <br />cushion earcups, flat fold design, Handsfree calls, adjustable
                        <br />headband and free 3,000 Boompoints gift card inside for best music.</p>
                    <div className='flex w-[224px] justify-between mt-4'>
                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium'>Brand</h1>
                            <p>Oriamo</p>
                        </div>
                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium'>Colour</h1>
                            <p>Black</p>
                        </div>

                    </div>
                    <div className='flex w-[234px] justify-between  mt-7'>
                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium'>Vendor</h1>
                            <p>Chichi Venture</p>
                        </div>
                        <div className='ml-5'>
                            <h1 className='text-neutral-700 text-lg font-medium'>Location</h1>
                            <p>Lagos</p>
                        </div>

                    </div>

                    <div className='flex justify-between mt-7'>
                        <div className='border  border-black rounded-[5px] w-[150px] h-[40px] flex justify-between items-center' >
                            <div className=' ml-3 w-[25px] h-[25px]  bg-black text-white text-center items-center rounded-[8px] text-[15px] font-bold' ><p className='text-center '>-</p></div>
                            <h1 className='text-black text-[20px] font-bold'>1</h1>
                            <div className='mr-3 w-[25px] h-[25px]  bg-black text-white text-center items-center rounded-[8px] text-[15px] font-bold'><p className='text-center '>+</p></div>
                        </div>
                        <div className='bg-[#87C505] border border-[#87C505] rounded-[5px] w-[300px] h-[40px] text-center items-center'><p className='text-sm font-bold text-white text-center items-center  pt-2 '>Make an Offer</p></div>
                    </div>
                    <div className='border  border-black rounded-[5px] h-[50px] mt-3'>
                        <p className='text-sm font-bold text-center items-center  pt-[10px]'>Make Enquiry</p>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default SingleReview