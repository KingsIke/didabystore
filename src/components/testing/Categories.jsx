import React, { useState } from "react";
import { FiSmartphone } from 'react-icons/fi';
import { CgMathPlus } from "react-icons/cg";
import { CgMathEqual } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { links } from './Mylink'


const Categories = () => {
  const [openLink, setOpenLink] = useState(null);



  const toggleLink = (name) => {
    if (openLink === name) {
      setOpenLink(null);
    } else {
      setOpenLink(name);
    }
  };

  return (
    <>
      {/* CATEGORIES  */}
      <div className="mb-1">
        <div className="w-[220px] h-fit font-semibold  bg-black mb-4 flex items-center justify-center">
          <button className="bg-black text-xl text-white text-center flex py-0   rounded items-center">
            <FiSmartphone className="mr-1" />
            Categories
          </button>

        </div>
        <div>
          {links.map((link, i) => (
            <div key={i} className="py-1">
              <div
                className={`px-1 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200 ${openLink === link.name ? 'bg-gray-100' : ''
                  }`}
              >
                <h3
                  className="py-3 font-semibold text-black flex items-center justify-between"
                  onClick={() => toggleLink(link.name)}
                >
                  <span>{link.name}</span>
                  <div className="absolute left-52 ">
                    {openLink === link.name ? (
                      <CgMathEqual className="h-8" />
                    ) : (
                      <CgMathPlus className="h-12" />
                    )}
                  </div>
                </h3>
              </div>
              {openLink === link.name && (
                <div className="md:block text-left w-[220px] item-start px-1 ">
                  <ul className="list-none">
                    {link.sublinks.map((slink, j) => (
                      <li className="py-0 text-lg  whitespace-nowrap font-normal" key={j}>
                        <span>
                          <Link to={slink.link}>{slink.name}</Link>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      {/* BRANDS */}
      <div >
        <div className="w-[220px] h-fit font-semibold bg-black mt-6 mb-4  flex items-center justify-center">
          <button className="bg-black text-white text-center flex py-0 text-xl  rounded items-center">
            <FaBookmark className="mr-1 text-white" />
            Brands
          </button>
        </div>
        <div>

          <div className="py-1">
            <div
              className="px-2 mb-2 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >
              <h3>
                  Armani

              </h3>
            </div>
            <div
               className="px-2 mb-2 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
              >
                <h3
               >Gucci


              </h3>
            </div>  <div
               className="px-2 mb-2 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
              >
                <h3
               >Dolce & Gabana
              
              </h3>
            </div>  <div
                className="px-2 mb-2 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
              >
                <h3
                >Lacoste
           
              </h3>
            </div>  <div
                className="px-2 mb-2 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
              >
                <h3
                >Tommy Hilfiger
            
              </h3>
            </div>  <div
                className="px-2 mb-2 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[220px] h-[30px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
              ><h3
                >Armani
              
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* PRICE  */}
      <div className="w-[220px] h-fit  bg-black mt-6 mb-3 font-semibold  flex items-center justify-center">
      <button className="bg-black text-white text-center flex py-0 text-xl  rounded items-center">
 <VscSettings className="mr-1 text-white" />
          Filter By Price
        </button>
      </div>

    </>
  );
};

export default Categories;
