
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';

import Furniture from './Furniture';

import HomeApp from './Home';
import KitchenApp from './Kitchen';
import Kitchenware from './KitchenWare';

import Office from './Office';










const Beauty = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<HomeApp/>
<Furniture/>
<Office />
<KitchenApp />
<Kitchenware />


</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default Beauty;
  