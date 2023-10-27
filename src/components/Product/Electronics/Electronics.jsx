
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';

import Tvs from "./Tvs";
import HomeApp from "./HomeApp";
import Generating from "./Generating";
import Camera from './Camera';











const Electronics = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Tvs/>
<HomeApp/>
<Generating />
<Camera />





</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Electronics;
  