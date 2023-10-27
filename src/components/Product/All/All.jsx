import Appliances from "./Appliances";
import Babies from "./Babies";
import Beauty from "./Beauty";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Groceries from "./Groceries";
import Health from "./Health & Fitness";
import Laptop from "./Laptop";
import Phone from "./Phone";
import FooterD from '../../footer/FooterD';
import NavPage from '../NavProduct/NavPage';









const ALL = () => {


return ( 
<div className='container flex flex-col '>



<div className="centered px-[5px]  border-solid border-2 border-orange-400">
<NavPage/>

<Fashion/>
<Beauty/>
<Phone />
<Laptop />
<Babies />
<Electronics />
<Groceries />
<Health/>
<Appliances/>

</div>
<div className='w-[100%] bg-black mt-1'>
<FooterD />

</div>
</div>







    





  );
  };

  export default ALL;
  