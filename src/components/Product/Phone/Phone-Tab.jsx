
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';

import Mobile from "./Mobile";
import Tablet from "./Tablet";
import Smart from "./SmartWatch";
import Accessories from "./PhoneAcc";










const Beauty = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Mobile/>
<Tablet/>
<Smart />
<Accessories />



</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Beauty;
  