import React from 'react';
import Shoe from "../../images/image 1.png"
import Categories from './Categories'
import Computer from '../Body/computer'
import Onsales from './Onsale'
import Feature from './FeatureProduct'
import Card from './Card'
import News from './News'
import Footer from './footer'
import SearchInput from '../Nav/Searchbar/searchbar';
const MultiColumnLayout = () => {
  return (
    <>
    <div className=''>

    <SearchInput  />
    </div>
    <div className="flex w-[1512px]">
     
      {/* Left Sticky Column */}
      <div className=" top-0 h-screen w-[230px] bg-white px-4 py-2">
        {/* Content for the sticky column */}
      <Categories  />
      </div>

      {/* Constrained Content */}
      <div className="flex-1  w-[1040px]  overflow-x-hidden">
        <div className="mx-auto max-w-7xl pl-8 pt-2 pr-8 pb-8">
          {/* Your content here */}
          <Computer/>
          <Card  />
          <Onsales/>
          <Feature />
          <News />
          


        </div>












        
      </div>
    </div>
<div className='mt-2'>

    <Footer />
</div>

    
    </>
    
  );
};

export default MultiColumnLayout;


