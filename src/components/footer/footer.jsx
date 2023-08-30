import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className="bg-gray-100 p-8">
    <div className="container mx-auto">


    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
      <div>
        <p id="Clothing-heading" className="font-medium text-gray-900">
          DIDABY
        </p>
        <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
          <li className="flex">
            <Link to="#" className="hover:text-gray-800">
              Tops
            </Link>
          </li>
          <li class="flex">
                                <a href="#" class="hover:text-gray-800">Dresses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Pants</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Denim</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sweaters</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">T-Shirts</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Jackets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Activewear</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Browse All</a>
                              </li>
          {/* Other list items */}
        </ul>
      </div>
      <div>
        <p id="Accessories-heading" className="font-medium text-gray-900">
          Accessories
        </p>
        <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
          <li className="flex">
            <Link to="#" className="hover:text-gray-800">
              Watches
            </Link>
          </li>
          <li class="flex">
                                <a href="#" class="hover:text-gray-800">Wallets</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Bags</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Sunglasses</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Hats</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Belts</a>
                              </li>
          {/* Other list items */}
        </ul>
      </div>
      <div>
        <p id="Brands-heading" className="font-medium text-gray-900">
          Brands
        </p>
        <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
          <li className="flex">
            <Link to="#" className="hover:text-gray-800">
              Full Nelson
            </Link>
          </li>
          <li class="flex">
                                <a href="#" class="hover:text-gray-800">My Way</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Counterfeit</a>
                              </li>
                              <li class="flex">
                                <a href="#" class="hover:text-gray-800">Significant Other</a>
                              </li>
          {/* Other list items */}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;
