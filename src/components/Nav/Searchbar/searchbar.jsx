import { NavBar } from '../NavBar/NavBar';
import { ImageNav } from '../ImageNav/ImageNav';
import NewArrivals from '../Arrival/NewArrivals';
import NavKids from '../NavKids/NavKids';
import FooterD from '../../footer/FooterD';
import Category from '../../Category/Category';


 const SearchInput = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">

<NavBar />
<ImageNav />
<Category />
<NewArrivals />
<NavKids />

</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default SearchInput;
  