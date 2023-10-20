import React from 'react'
import Dogo from '../../../images/kids.png';
import "./NavKids.css";
import Cloth from '../../../images/collectionCloth.png'
import Belt from '../../../images/collectionbelt.png'
import Shoe from '../../../images/collectionShoe.png'
import Pants from '../../../images/collectionPan.png'
import Bag from '../../../images/collectionBag.png'
import Bag1 from '../../../images/collectionBag1.png'
import Shoe1 from '../../../images/collectionShoe1.png'
import Lady from '../../../images/collectionLady.png'











const NavKids = () => {

    return (
        <div className='w-full border-collapse mt-10'>
            <div className='kidimage-container h-[220px]'>
                <img className="rounded-[15px] h-[220px]" src={Dogo} alt="DidayLogo" />
                <div className='kidImageBack h-[99px] w-[510px] flex-col justify-center items-center  '>
                    <p className=' text-white text-[38px] font-bold  text-center  text-3xl whitespace-nowrap '>Show your Kids all the love they deserve <br /> <span className='break-normal'>
                        when you shop for them </span></p>
                    <div className='kidposIma mt-1 text-center '>
                        <button className='Imagebtn'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='collection mt-2 mb-1'>

                <h3 className='"text-zinc-950 text-3xl font-[600] pb-2 '>Our Collection</h3>
                <div className='h-[425px] flex flex-row '>
                    <div className='flex flex-row basis-1/2'>
                        <div className='basis-1/2 w-full  flex flex-col'>

                            <div className=' basis-1/2 h-full'>
                                <img src={Shoe} alt="" srcset="" className='h-full rounded' />
                            </div>

                            <div className='mt-1  basis-1/2 h-full flex flex-row justify-between items-center'>
                                <div className='basic-1/2 mr-2'>
                                    <img src={Cloth} alt="" srcset="" className='rounded w-[200px] h-[180px]' />
                                </div>
                                <div className='basic-1/2 ml-2'>
                                    <img src={Belt} alt="" srcset="" className='rounded w-[200px] h-[180px]' />
                                </div>
                            </div>
                        </div>

                        <div className='basis-1/2 w-full flex flex-column justify-center rounded-[15px]'>
                            <img src={Pants} alt="" srcset="" className='mx-auto h-[405px] rounded-[15px]' />
                        </div>
                    </div>

                    <div className=' basis-1/2 w-full'>
                    <div className='flex flex-row  basis-1/2'>
                        <div className='basis-1/2 w-full  flex flex-col'>

                            <div className=' basis-1/2 h-full'>
                                <img src={Bag} alt="" srcset="" className='h-full rounded' />
                            </div>

                            <div className='mt-1  basis-1/2 h-full flex flex-row justify-between items-center'>
                                <div className='basic-1/2 mr-2'>
                                    <img src={Bag1} alt="" srcset="" className='rounded w-[200px] h-[180px]' />
                                </div>
                                <div className='basic-1/2 ml-2'>
                                    <img src={Shoe1} alt="" srcset="" className='rounded w-[200px] h-[180px]' />
                                </div>
                            </div>
                        </div>

                        <div className='basis-1/2 w-full flex flex-column justify-center rounded-[15px] ml-3'>
                            <img src={Lady} alt="" srcset="" className='mx-auto h-[400px] rounded-[15px] w-full' />
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NavKids
