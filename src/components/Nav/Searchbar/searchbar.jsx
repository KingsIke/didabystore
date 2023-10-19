// import { useRef } from 'react';

import { NavBar } from '../NavBar/NavBar';
import { ImageNav } from '../ImageNav/ImageNav';
import NewArrivals from '../Arrival/NewArrivals';
import NavKids from '../NavKids/NavKids';
import FooterD from '../../footer/FooterD';

 const SearchInput = () => {


return ( 
  <>
<div className="centered px-[5px]  border-solid border-2 border-orange-400">

<NavBar />
<ImageNav />
<NewArrivals />
<NavKids />

</div>
<footer className='w-1440px bg-black m-0 p-0'>
  <FooterD />
</footer>

</>



    





  );
  };

  export default SearchInput;
  