import React from 'react';
import Shoe from "../../images/image 1.png"
import Categories from './Categories'
import Computer from '../Body/computer'
import Onsales from './Onsale'
import Feature from './FeatureProduct'
import Card from './Card'
import News from './News'
import Footer from './footer'
const MultiColumnLayout = () => {
  return (
    <>
    
    <div className="flex w-[1512px]">
      {/* Left Sticky Column */}
      <div className="sticky top-0 h-screen w-[347px] bg-white px-4 py-8">
        {/* Content for the sticky column */}
      <Categories />
      </div>

      {/* Constrained Content */}
      <div className="flex-1 shadow-xl shadow-orange-300 w-[1040px]  overflow-x-hidden">
        <div className="mx-auto max-w-7xl p-8">
          {/* Your content here */}
          <Computer/>
          <Card  />
          <Onsales/>
          <Feature />
          <News />
          


        </div>












        
      </div>
    </div>

    <Footer />

    
    </>
    
  );
};

export default MultiColumnLayout;


