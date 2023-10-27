
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';

import Bath from "./Bath";
import Fragrance from "./Fragrance";
import Hair from "./Hair";
import Makeup from "./Makeup";
import Skincare from "./Skincare";









const Beauty = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Skincare/>
<Makeup/>
<Bath />
<Fragrance />
<Hair />


</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Beauty;
  