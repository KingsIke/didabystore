
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';

import Desktop from "./Desktop";
import ComputerAcc from "./Computer_Acc";
import Printer from "./Printer";
import Laptop from './Laptop';










const Beauty = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Laptop/>
<Desktop/>
<ComputerAcc />
<Printer />



</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Beauty;
  