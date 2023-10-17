import React from "react";
import "./NavBar.css";
import Dogo from '../../../images/didayIcon1.png';

import { TbMessage2 } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const NavBar = () => {
    return (
        <div className="NavContainer">
            <div className="">      
                <img className="w-100% max-w-[300px] pt" src={Dogo} alt="DidayLogo" />
</div>
            <div className="NavHome text-[#868686] text-[20px] font-bold leading-normal">
                <div className="ml-7 text-black"><h1>Home</h1></div>
                <div  className="ml-7">Product</div>
                <div  className="ml-7">New Arrivals</div>

          
            </div>
            <div className="NavIcons  rounded-full bg-[#F3F3F3]">
                <div className="mr-6 ml-6">
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">
                        <TbMessage2 className="iconsNav"/>
                    </span>
                </div>
                <div className="mr-6">
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">
                        <BsPerson className="iconsNav"/>
                    </span>
                </div>
                <div className="mr-6">
                <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">
                    <AiOutlineHeart className="iconsNav"/>
                </span>
            </div>
            </div>
           
        </div>
    );
};

export default NavBar;