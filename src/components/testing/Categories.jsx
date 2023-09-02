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
        <div className="w-[327px] h-[40px]  bg-black mb-4 flex items-center justify-center">
          <button className="bg-black text-white text-center flex py-2 text-base font-normal rounded items-center">
            <FiSmartphone className="mr-1" />
            Categories
          </button>
        </div>
        <div>
          {links.map((link, i) => (
            <div key={i} className="py-1">
              <div
                className={`px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200 ${openLink === link.name ? 'bg-gray-100' : ''
                  }`}
              >
                <h3
                  className="py-3 font-semibold text-black flex items-center justify-between"
                  onClick={() => toggleLink(link.name)}
                >
                  <span>{link.name}</span>
                  <div className="absolute left-72 ">
                    {openLink === link.name ? (
                      <CgMathEqual className="h-12" />
                    ) : (
                      <CgMathPlus className="h-12" />
                    )}
                  </div>
                </h3>
              </div>
              {openLink === link.name && (
                <div className="md:block text-left w-[73px] item-start px-3 ">
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
        <div className="w-[327px] h-[40px]  bg-black mb-4  flex items-center justify-center">
          <button className="bg-black text-white text-center flex py-2 text-base font-normal rounded items-center">
            <FaBookmark className="mr-1 text-white" />
            Brands
          </button>
        </div>
        <div>

          <div className="py-1">
            <div
              className="px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >Armani
              <h3
                className="py-3 font-semibold text-black flex items-center justify-between">

              </h3>
            </div>
            <div
              className=" my-2 px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >Gucci
              <h3
                className="py-3 font-semibold text-black flex items-center justify-between">

              </h3>
            </div>  <div
              className="my-2 px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >Dolce & Gabana
              <h3
                className="py-3 font-semibold text-black flex items-center justify-between">

              </h3>
            </div>  <div
              className="my-2 px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >Lacoste
              <h3
                className="py-3 font-semibold text-black flex items-center justify-between">

              </h3>
            </div>  <div
              className="my-2 px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >Tommy Hilfiger
              <h3
                className="py-3 font-semibold text-black flex items-center justify-between">

              </h3>
            </div>  <div
              className="my-2 px-3 md:cursor-pointer bg-[#ebebeb] text-lg font-bold group w-[327px] h-[40px] rounded flex items-center justify-between   text-left text-gray-500  border-gray-500  focus:ring-4 focus:ring-gray-200"
            >Armani
              <h3
                className="py-3 font-semibold text-black flex items-center justify-between">

              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* PRICE  */}
      <div className="w-[327px] h-[40px]  bg-black mb-4  flex items-center justify-center">
        <button className="bg-black text-white text-center flex py-2 text-base font-normal rounded items-center">
          <VscSettings className="mr-1 text-white" />
          Filter By Price
        </button>
      </div>

    </>
  );
};

export default Categories;
