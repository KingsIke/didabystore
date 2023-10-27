
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';

import Maternity from "./Maternity";
import ChildCare from "./childCare";
import Toys from "./Toys";
import Children from './Children';
import BabyCloth from './Baby';










const Kids = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<BabyCloth/>
<Children/>
<Toys />
<ChildCare />
<Maternity />




</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Kids;
  