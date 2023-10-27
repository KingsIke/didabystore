
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';


import Gym from './GymEqui';
import Supplement from './Supplement';
import GymWear from './GymWears';











const Health = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Gym/>
<Supplement/>
<GymWear />






</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Health;
  