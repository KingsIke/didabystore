import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSolidMessage } from 'react-icons/bi';



const Footer = () => {
  return (
    <div className='footer p-20 md:p-40'>
      <div className='top flex gap-10'>
        <div className='item flex-1 flex flex-col gap-2 text-justify text-sm'>
          <h1 className='text-base font-semibold text-gray-700 mb-3'>Categories</h1>
          <span className='mb-3 flex items-center'>
            <BsHouseDoorFill className='mr-1' />
            115 Eight Turn, Surulere, Lagos
          </span>
          <span class="mb-3 flex items-center "><BsFillTelephoneFill className="mr-1"/>(01) 6637829</span>
          <span class="mb-3 flex items-center mr-1">  <BiSolidMessage className="mr-1"/>   info@didaby.com
</span>
        </div>
        <div className='item flex-1 flex flex-col gap-2 text-justify text-sm'>
          <h1 className='text-base font-semibold text-gray-700 mb-3'>Links</h1>
          <span class="mb-3">About Us</span>
          <span class="mb-3">Contact Us</span>
          <span class="mb-3">Shipping & Delivery</span>
        </div>
        <div className='item flex-1 flex flex-col gap-2 text-justify text-sm'>
          <h1 className='text-base font-semibold text-gray-700 mb-3'>Our Service</h1>
          <span class="mb-3">
           Privacy Policy </span>
            <span class="mb-3">Terms of Sale</span>
            <span class="mb-3">Customer Service</span>
            <span class="mb-3">Delivery Information</span>
            <span class="mb-3">Payment</span>
            <span class="mb-3">Saved Cards</span>

        </div>
        <div className='item flex-1 flex flex-col gap-2 text-justify text-sm'>
          <h1 className='text-base font-semibold text-gray-700 mb-3'>My Account</h1>
          <span class="mb-3">
            My Account </span>
            <span class="mb-3">My Cart</span>
            <span class="mb-3">Checkout</span>
            <span class="mb-3">My Wishlist</span>
            <span class="mb-3">Tracking Order</span>
         
        </div>
      </div>
    
    </div>
  );
};

export default Footer;
