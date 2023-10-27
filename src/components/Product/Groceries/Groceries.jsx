
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';


import Food from "./Food"
import Cereal from "./Cereal";
import Drink from "./Drinks";
import Biscuit from './Biscuit';
import HouseHold from './HouseHold'











const Groceries = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Food/>
<Cereal/>
<Drink />
<Biscuit />
<HouseHold />






</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>




  );
  };

  export default Groceries;
  