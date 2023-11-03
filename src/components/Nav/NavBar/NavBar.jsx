import React from "react";
import "./NavBar.css";
import Dogo from '../../../images/didayIcon1.png';
import { Link } from "react-router-dom";


import { TbMessage2 } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

export const NavBar = () => {
    return (
        <div className="NavContainer">
            <div className="">
                <img className="w-100% max-w-[300px] " src={Dogo} alt="DidayLogo" />
            </div>
            <div className="NavHome text-[#868686] text-[18px] font-bold leading-normal">
                <div className=" text-black"><h1>
              <Link to="/home">Home</Link>
                    </h1></div>
                <div className="">
              <Link to="/product">Product</Link>

                </div>
                <div className=""><Link to="/arrival">New Arrivals</Link></div>


            </div>
            <div className="NavIcons  rounded-full  text-center">
                <div className="mr-6 ml-6 ">
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white pt-3">
                        <TbMessage2 className="iconsNav" />
                    </span>
                </div>
                <div className="mr-5">
                    
              <Link to="/profile">
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">
                        <BsPerson className="iconsNav" />
                    </span>
                    </Link>
                </div>
                <div className="pr-1">
                    <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white">
                        <AiOutlineHeart className="iconsNav" />
                    </span>
                </div>
            </div>

        </div>
    );
};

;