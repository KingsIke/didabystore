import React from 'react'
import NavPage from '../../Product/NavProduct/NavPage'
import FooterD from '../../footer/FooterD'
import Cloth from '../../../images/clothing1.png'
import Cloth1 from '../../../images/clothing2.png'
import Cloth2 from '../../../images/clothing3.png'

const Clothing = () => {
  return (<>
  
  
    <div className='mx-4'>
        <NavPage/>

        {/* PICTURE VIEWS  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  <div className="col-span-1 md:col-span-1 mb-4">
    <img
      src={Cloth}
      className="w-[410px] h-[350px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />

    <img
      src={Cloth2}
      className="w-[410px] h-[280px] shadow-lg rounded-lg mb-10"
      alt="Wintry Mountain Landscape"
    />
     <img
      src={Cloth1}
      className="w-[410px] h-[490px]  shadow-lg rounded-lg "
      alt="Mountains in the Clouds"
    />
  </div>

  <div className="col-span-1 md:col-span-1 mb-4">
    <img
      src={Cloth1}
      className="w-[410px]l h-[490px]  shadow-lg rounded-lg mb-10"
      alt="Mountains in the Clouds"
    />

    <img
      src={Cloth}
      className="w-[410px] h-[350px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />
     <img
      src={Cloth2}
      className="w-[410px]  h-[280px] shadow-lg rounded-lg "
      alt="Waves at Sea"
    />
  </div>

  <div className="col-span-1 md:col-span-1 mb-4">
    <img
      src={Cloth2}
      className="w-[410px]  h-[280px] shadow-lg rounded-lg mb-10"
      alt="Waves at Sea"
    />

    <img
      src={Cloth1}
      className="w-[410px]  h-[490px] shadow-lg rounded-lg mb-10"
      alt="Yosemite National Park"
    />
        <img
      src={Cloth}
      className="w-[410px]  h-[350px] shadow-lg rounded-lg "
      alt="Boat on Calm Water"
    />
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  <div className="col-span-1 md:col-span-1 mb-4">
    <img
      src={Cloth}
      className="w-[410px] h-[350px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />

    <img
      src={Cloth2}
      className="w-[410px] h-[280px] shadow-lg rounded-lg mb-10"
      alt="Wintry Mountain Landscape"
    />
     <img
      src={Cloth1}
      className="w-[410px] h-[490px]  shadow-lg rounded-lg "
      alt="Mountains in the Clouds"
    />
  </div>

  <div className="col-span-1 md:col-span-1 mb-4">
    <img
      src={Cloth1}
      className="w-[410px]l h-[490px]  shadow-lg rounded-lg mb-10"
      alt="Mountains in the Clouds"
    />

    <img
      src={Cloth}
      className="w-[410px] h-[350px] shadow-lg rounded-lg mb-10"
      alt="Boat on Calm Water"
    />
     <img
      src={Cloth2}
      className="w-[410px]  h-[280px] shadow-lg rounded-lg "
      alt="Waves at Sea"
    />
  </div>

  <div className="col-span-1 md:col-span-1 mb-4">
    <img
      src={Cloth2}
      className="w-[410px]  h-[280px] shadow-lg rounded-lg mb-10"
      alt="Waves at Sea"
    />

    <img
      src={Cloth1}
      className="w-[410px]  h-[490px] shadow-lg rounded-lg mb-10"
      alt="Yosemite National Park"
    />
        <img
      src={Cloth}
      className="w-[410px]  h-[350px] shadow-lg rounded-lg "
      alt="Boat on Calm Water"
    />
  </div>
</div>


    </div>
        <FooterD />
  </>
  )
}

export default Clothing