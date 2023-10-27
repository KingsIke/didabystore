// import { NavBar } from '../NavBar/NavBar';
// import { ImageNav } from '../ImageNav/ImageNav';
// import NewArrivals from '../Arrival/NewArrivals';

import NavPage from '../NavProduct/NavPage';
import FooterD from '../../footer/FooterD';
import Varities from '../Fashion/Varities/Varities';
import Bag from '../Fashion/Varities/Bag';
import Watch from '../Fashion/Varities/Watch';
import Jewelry from '../Fashion/Varities/Jewelry';
import Shoe from '../Fashion/Varities/Shoe';
import Wedding from '../Fashion/Varities/Wedding';
import Accessory from '../Fashion/Varities/Accessory'





 const SearchInput = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">

<NavPage/>
<Varities />
<Bag />
<Shoe />
<Watch />
<Jewelry />
<Wedding />
<Accessory/>

</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default SearchInput;
  