import { Component } from 'react';
import '../App.css';

import NavBar from './nav';
import Footer from './footer';

class Home extends Component {
  render(){
  return (
   <>
   <NavBar/>
<header class="bg-white bg-orange-500">
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
           
            </div>

        <div class="">
            <img class=" w-full h-full max-w-3xl rounded-md" src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/7011036485902508832d0c0b1-40e0-46d6-acc9-501b975dbd34..jpg" alt=""></img>
        </div>
    </div>
</header>
<h2 className='text-black  ml-80 mt-2  font-semibold  capitalize'>Phones & Devices</h2>
<h2 className='text-black text-3xl ml-80 mt-2  font-semibold  capitalize'>Best Deals</h2>


<section className='bg-white-900'>

    <div className='grid  h-[550px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:items-center'>
    
<div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
    <div class=" card1 w-full h-72 mt-16 bg-white  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-white-500">
    <img class=" w-76 h-full max-w-3xl rounded-md" src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/8003309364772685814a347e9-9044-48a6-8368-2010706a610b..jpg" alt=""></img>
    </div>
    <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
        <h3 class="tracking-wide  text-black-200  dark:text-white">TECHNO Pop6 GO</h3>

        <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
            <span class="font-bold text-black-800 dark:text-black-200">RWF 87,500</span>
            </div>
            <button class="px-2 py-1 text-xs  text-white-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">view Detail</button>
        
    </div>
</div>

{/* second card */}

<div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
    <div class=" card2 w-full h-72 mt-16 bg-white  cursor-pointer  rounded-lg hover:shadow-md hover:shadow-white-500">
    <img class=" w-76 h-full max-w-3xl rounded-md" src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/80032873358967206a5e6e7a4-215e-4192-82cf-bf6e50cb01c3..jpg"alt=""></img>
    </div>
    <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
        <h3 class="tracking-wide text-black-200 dark:text-white">TECHNO Camon 19</h3>

        <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">Rwf 215,000</span>
            </div>
            <button class="px-2 py-1 text-xs  text-white-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">view Detail</button>
        
    </div>
</div>

{/* third card */}
<div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
    <div class=" card2 w-full h-72 mt-16 bg-white  cursor-pointer  rounded-lg hover:shadow-md hover:shadow-white-500">
    <img class=" w-76 h-full max-w-3xl rounded-md" src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/799551912489930899b19776d-6f9e-4575-abb3-5ccbcfab23e8..jpg"alt=""></img>
    </div>
    <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
        <h3 class="tracking-wide text-black-200 dark:text-white">SAMSUNG A04e</h3>

        <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">Rwf 135,000</span>
            </div>
            <button class="px-2 py-1 text-xs  text-white-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">view Detail</button>
        
    </div>
</div>
 
</div>
</section>



<section className='bg-orange-600'>
 <h2 className='text-white  ml-80 mt-2  font-semibold  capitalize'>4G INTERNET</h2>
<h2 className='text-white text-3xl ml-80 mt-2  font-semibold  capitalize'>Hot Packs</h2>
    <div className='grid  h-[550px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:items-center'>
    
<div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
    <div class=" card1 w-full h-72 mt-16 bg-white  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-white-500">
    <img class=" w-76 h-full max-w-3xl rounded-md" src="http://www.mango4g.rw/" alt=""></img>
    </div>
    <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
        <h3 class="tracking-wide  text-black-200  dark:text-white">TECHNO Pop6 GO</h3>

        <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
            <span class="font-bold text-black-800 dark:text-black-200">RWF 87,500</span>
            </div>
            <button class="px-2 py-1 text-xs  text-orange-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">view Detail</button>
        
    </div>
</div>

{/* second card */}

<div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
    <div class=" card2 w-full h-72 mt-16 bg-white  cursor-pointer  rounded-lg hover:shadow-md hover:shadow-white-500">
    <img class=" w-76 h-full max-w-3xl rounded-md" src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/80032873358967206a5e6e7a4-215e-4192-82cf-bf6e50cb01c3..jpg"alt=""></img>
    </div>
    <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
        <h3 class="tracking-wide text-black-200 dark:text-white">TECHNO Camon 19</h3>

        <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">Rwf 215,000</span>
            </div>
            <button class="px-2 py-1 text-xs  text-orange-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">view Detail</button>
        
    </div>
</div>

{/* third card */}
<div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
    <div class=" card2 w-full h-72 mt-16 bg-white  cursor-pointer  rounded-lg hover:shadow-md hover:shadow-white-500">
    <img class=" w-76 h-full max-w-3xl rounded-md" src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/799551912489930899b19776d-6f9e-4575-abb3-5ccbcfab23e8..jpg"alt=""></img>
    </div>
    <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
        <h3 class="tracking-wide text-black-200 dark:text-white">SAMSUNG A04e</h3>

        <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">Rwf 135,000</span>
            </div>
            <button class="px-2 py-1 text-xs  text-orange-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">view Detail</button>
        
    </div>
</div>
 
</div>
</section>

                   
            
          
<Footer/>
   
   </>
  );
}
}

export default Home;
