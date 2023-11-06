import React from "react";
import Cloth from '../../../images/newArrivals.png'
import Shoe from '../../../images/bestSales.png'
import Perfume from '../../../images/bestsale1.png'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai"
import "./NewArrivals.css"
const NewArrivals = () => {
    return (
        <>



            <div className="newArrivals border-solid border-2 border-orange-400 mt-1">





                <div className="headerArrival ">

                    <p className=" newPage ">New Arrivals</p>
                    <p className="viewArrival">View all</p>
                </div>

                <div className="arrivalContainer mt-3">




                    <div className="   border-solid border-2 border-blue-400">


                        <div className="imageArrival ">

                            <span>
                                <AiFillHeart className="imageSpan text-[#C10909]  " />
                            </span>
                            <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                iphone
                            </p>
                            <p className="priceP pt-1">N2,500,000</p>

                        </div>



                    </div>

                    <div className="   border-solid border-2 border-blue-400">


                        <div className="imageArrival ">

                            <span>
                                <AiOutlineHeart class="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N250,000</p>

                        </div>



                    </div>

                    <div className="   border-solid border-2 border-blue-400">
                        <div className="imageArrival">

                            <span>
                                <AiOutlineHeart className="imageSpan " />
                            </span>
                            <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Louboutin heels
                            </p>
                            <p className="priceP pt-1">N52,000</p>

                        </div>



                    </div>

                    <div className="   border-solid border-2 border-blue-400">


                        <div className="imageArrival ">

                            <span>
                                <AiOutlineHeart className="imageSpan  " />
                            </span>
                            <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Hisesnse 62” TV
                            </p>
                            <p className="priceP pt-1">N800,000</p>

                        </div>



                    </div>
                </div>


            </div>



            <div className="newArrivals border-solid border-2 border-orange-400">
                <div className="headerArrival ">

                    <p className=" newPage ">Best Sellers</p>
                    <p className="viewArrival ">View all</p>
                </div>

                <div className="arrivalContainer mt-3">




                    <div className="   border-solid border-2 border-blue-400">



                        <div className="imageArrival ">

                            <span>
                                <AiOutlineHeart className="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Shoe} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakershou
                            </p>
                            <p className="priceP pt-1">N2,500,000</p>

                        </div>



                    </div>

                    <div className="   border-solid border-2 border-blue-400">

                        <div className="imageArrival ]">

                            <span>
                                <AiOutlineHeart className="imageSpan  " />
                            </span>
                            <img src={Shoe} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N250,000</p>

                        </div>



                    </div>

                    <div className="   border-solid border-2 border-blue-400">

                        <div className="imageArrival">

                            <span>
                                <AiOutlineHeart className="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Shoe} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N52,000</p>

                        </div>



                    </div>

                    <div className="   border-solid border-2 border-blue-400">
                        <div className="imageArrival ">

                            <span>
                                <AiOutlineHeart className="imageSpan  " />
                            </span>
                            <img src={Shoe} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N800,000</p>

                        </div>



                    </div>
                </div>




                <div className="arrivalContainer mt-3">




                    <div className="  w-[212px] border-solid border-2 border-blue-400">


                        <div className="imageArrival flex justify-between w-[210px] h-[210px] rounded-[12px]">

                            <span>
                                <AiOutlineHeart className="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Perfume} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakershou
                            </p>
                            <p className="priceP pt-1">N2,500,000</p>

                        </div>



                    </div>

                    <div className="  w-[212px] border-solid border-2 border-blue-400">

                        <div className="imageArrival flex justify-between w-[210px] h-[210px] rounded-[12px]">

                            <span>
                                <AiOutlineHeart className="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Perfume} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N250,000</p>

                        </div>



                    </div>

                    <div className="  w-[212px] border-solid border-2 border-blue-400">


                        <div className="imageArrival flex justify-between w-[210px] h-[210px] rounded-[12px]">

                            <span>
                                <AiOutlineHeart className="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Perfume} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N52,000</p>

                        </div>



                    </div>

                    <div className="  w-[212px] border-solid border-2 border-blue-400">


                        <div className="imageArrival flex justify-between w-[210px] h-[210px] rounded-[12px]">

                            <span>
                                <AiOutlineHeart className="imageSpan text-[20px] text-black p-[6px] m-0 " />
                            </span>
                            <img src={Perfume} alt="Avatar" className=" rounded-[12px] " />
                        </div>

                        <div className="priceTitle flex justify-between mt-3 ">
                            <p className="titleP">
                                Men’s Sneakers
                            </p>
                            <p className="priceP pt-1">N800,000</p>

                        </div>



                    </div>
                </div>


            </div>
        </>
    );
};
export default NewArrivals;
