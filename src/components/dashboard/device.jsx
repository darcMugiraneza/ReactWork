import { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../nav';
import Footer from '../footer';


class Devices extends Component {
  render(){
  return (
   <>
   <NavBar/>
   <section class="container px-4 mx-auto">
<section class="bg-white dark:bg-gray-900">
    <div class="container px-2 py-14 mx-auto lg:flex rounded-lg">
        <h1 class="text-3xl font-semibold text-orange-600 capitalize lg:text-4xl dark:text-white">4G Mobile Phone</h1>
        <h2 class="text-3xl font-semibold text-black-100 capitalize lg:text-4xl dark:text-white rounded-lg">Router</h2>
        <h3 class="text-3xl font-semibold text-black-200 capitalize lg:text-4xl dark:text-whitez">Accessory</h3>
        <h4 class="text-3xl font-semibold text-black-100 capitalize lg:text-4xl dark:text-white">Camera</h4>

</div>
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
<div class="flex items-center justify-between mt-6">
        <Link href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </Link>

        <div class="items-center hidden lg:flex gap-x-3">
            <Link href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60" to="/device">1</Link>
            <Link href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100" to="/device">2</Link>
            <Link href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"to="/device">3</Link>
            <Link href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"to="/device">4</Link>
            <Link href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"to="/device">5</Link>

        </div>

        <Link href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </Link>
    </div>
</section> 


  
  
</section>
 <Footer/>
  </> 
   
  );
}
}

export default Devices;
