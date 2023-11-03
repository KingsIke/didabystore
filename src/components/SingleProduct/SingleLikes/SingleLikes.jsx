import React from 'react'
import { NavBar } from '../../Nav/NavBar/NavBar'
import Shoe1 from '../../../images/shoe1.png'
import Shoe2 from '../../../images/shoe2.png'
import Shoe3 from '../../../images/shoe3.png'
import Shoe4 from '../../../images/shoe4.png'
import Shoe5 from '../../../images/shoe5.png'
import Like1 from '../../../images/like1.png'
import Like2 from '../../../images/like2.png'
import Like3 from '../../../images/like3.png'
import Like4 from '../../../images/like4.png'
import Like5 from '../../../images/like5.png'
import Like6 from '../../../images/like6.png'
import FooterD from '../../footer/FooterD'




const SingleLikes = () => {
    return (
        <>        <div className='mx-4'>
            <NavBar />

            <div className='mt-3 flex w-full h-[440px] border border-red-700 '>

                <div className="w-[130px] border border-green-300 mr-7 overflow-y-hidden">
                    <div className='border border-red-500 h-[100px] mb-[12px]'>
                        <img src={Shoe1} alt="" className='h-full w-full' />

                    </div>
                    <div className='border border-red-500 h-[100px] mb-[12px]'>
                        <img src={Shoe2} alt="" className='h-full w-full' />
                    </div>
                    <div className='border border-red-500 h-[100px] mb-[12px]'>
                        <img src={Shoe3} alt="" className='h-full w-full' />
                    </div>
                    <div className='border border-red-500 h-[100px] mb-[12px]'>
                        <img src={Shoe4} alt="" className='h-full w-full' />
                    </div>
                </div>

                <div className='rounded-[15px] w-[520px] mr-8'>
                    <img src={Shoe5} alt="" className='h-full w-full' />

                </div>
                <div className=" w-[500px] overflow-hidden ">
                    <h1 className='text-zinc-800 text-2xl font-semibold overflow-hidden'>Ladies High heeled office shoes</h1>
                    <p className='text-neutral-700 text-2xl font-normal mt-[10px] overflow-hidden'>N25,000</p>
                    <p className=' mt-4 whitespace-normal text-justify w-[515px]  text-zinc-500 text-[15px] font-normal  border border-red-500'>
                        Look elegant in this comfy High heeled shoes. Enjoy the confidence it
                        <br />gives when you wear it to the office, church or corporate event.
                    </p>
                    <div className='flex w-auto justify-between mt-4 border border-pink-400' >
                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium'>Brand</h1>
                            <p>Zara</p>
                        </div>

                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium '>Size</h1>
                            <p>40, 41,42</p>
                        </div>

                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium'>Colour</h1>
                            <p>Black</p>
                        </div>

                    </div>
                    <div className='flex w-auto justify-between  mt-7 border border-pink-400'>
                        <div>
                            <h1 className='text-neutral-700 text-lg font-medium'>Gender</h1>
                            <p>Women</p>
                        </div>
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

            {/* YOU MAY LIKE  */}

            <h1 className='text-neutral-700 text-3xl font-bold my-5 overflow-hidden'>
                You may also like
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-1 md:col-span-1 mb-4">
                    <img
                        src={Like1}
                        class="w-full h-[480px] shadow-lg rounded-lg mb-10"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src={Like2}
                        class="w-full h-[220px] shadow-lg rounded-lg mb-10"
                        alt="Wintry Mountain Landscape"
                    />

                </div>

                <div class="col-span-1 md:col-span-1 mb-4">
                    <img
                        src={Like3}
                        class="w-full h-[350px]  shadow-lg rounded-lg mb-10"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src={Like4}
                        class="w-full h-[350px] shadow-lg rounded-lg mb-10"
                        alt="Boat on Calm Water"
                    />

                </div>

                <div class="col-span-1 md:col-span-1 mb-4">
                    <img
                        src={Like5}
                        class="w-full h-[220px] shadow-lg rounded-lg mb-10"
                        alt="Waves at Sea"
                    />

                    <img
                        src={Like6}
                        class="w-full h-[480px] shadow-lg rounded-lg mb-10"
                        alt="Yosemite National Park"
                    />

                </div>
            </div>

        </div>

{/* 
        <div>
            <span>0</span>
            <input type="range" min={10}  max={100}/>
            <span>100</span>
        </div> */}

        <FooterD />
        </>

    )
}

export default SingleLikes