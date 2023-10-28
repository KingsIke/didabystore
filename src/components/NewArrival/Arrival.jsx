import React from 'react'
import Hair from '../../images/arrivalHair.png'
import Pant from '../../images/arrivalPant.png'
import { NavBar } from '../Nav/NavBar/NavBar';
import Oil from '../../images/arrivalBottol.png';
import Dogo from '../../images/ArrivalNav.png'
import './Arrival.css'

const Arrival = () => {
  return (
    
    <div>

<NavBar />

{/* PICTURE NAV  */}

<div className='w-full border-collapse mt-7 mb-7 '>
        <div className='product-container h-[300px]'>
            <img className="rounded-[15px] w-full h-[300px]"  src={Dogo} alt="DidayLogo" />
            <div className='arrivalImageBack h-[109px] w-[599px] flex-col justify-center items-center border-solid border-2 border-blue-400 xl-ml-[300px]'>
                 <p className=' text-white text-[38px] font-bold whitespace-nowrap text-center'>New Arrival</p>
              
            </div>
        </div>
    </div>


{/* GALLERY COMPOSE  */}

       <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="col-span-1 md:col-span-1 mb-4">
    <img
      src={Hair}
      class="w-full h-[380px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />

    <img
      src={Oil}
      class="w-full h-[350px] shadow-lg rounded-lg mb-10"
      alt="Wintry Mountain Landscape"
    />
     <img
      src={Pant}
      class="w-full h-[480px]  shadow-lg rounded-lg "
      alt="Mountains in the Clouds"
    />
  </div>

  <div class="col-span-1 md:col-span-1 mb-4">
    <img
      src={Pant}
      class="w-full h-[480px]  shadow-lg rounded-lg mb-10"
      alt="Mountains in the Clouds"
    />

    <img
      src={Hair}
      class="w-full h-[380px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />
     <img
      src={Oil}
      class="w-full h-[350px] shadow-lg rounded-lg "
      alt="Waves at Sea"
    />
  </div>

  <div class="col-span-1 md:col-span-1 mb-4">
    <img
      src={Oil}
      class="w-full h-[350px] shadow-lg rounded-lg mb-10"
      alt="Waves at Sea"
    />

    <img
      src={Pant}
      class="w-full h-[480px] shadow-lg rounded-lg mb-10"
      alt="Yosemite National Park"
    />
        <img
      src={Hair}
      class="w-full h-[380px] shadow-lg rounded-lg "
      alt="Boat on Calm Water"
    />
  </div>
</div>


<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="col-span-1 md:col-span-1 mb-4">
    <img
      src={Hair}
      class="w-full h-[380px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />

    <img
      src={Oil}
      class="w-full h-[350px] shadow-lg rounded-lg mb-10"
      alt="Wintry Mountain Landscape"
    />
     <img
      src={Pant}
      class="w-full h-[480px]  shadow-lg rounded-lg "
      alt="Mountains in the Clouds"
    />
  </div>

  <div class="col-span-1 md:col-span-1 mb-4">
    <img
      src={Pant}
      class="w-full h-[480px]  shadow-lg rounded-lg mb-10"
      alt="Mountains in the Clouds"
    />

    <img
      src={Hair}
      class="w-full h-[380px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />
     <img
      src={Oil}
      class="w-full h-[350px] shadow-lg rounded-lg "
      alt="Waves at Sea"
    />
  </div>

  <div class="col-span-1 md:col-span-1 mb-4">
    <img
      src={Oil}
      class="w-full h-[350px] shadow-lg rounded-lg mb-10"
      alt="Waves at Sea"
    />

    <img
      src={Pant}
      class="w-full h-[480px] shadow-lg rounded-lg mb-10"
      alt="Yosemite National Park"
    />
        <img
      src={Hair}
      class="w-full h-[380px] shadow-lg rounded-lg "
      alt="Boat on Calm Water"
    />
  </div>
</div>

    </div>
  )
}

export default Arrival