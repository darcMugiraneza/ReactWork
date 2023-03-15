
import '../App.css';
import { Component } from 'react';


class Login extends Component {
    render(){
    return (
   <>
    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-16 rounded-lg shadow-2xl">
        <section>
            <h1 class="font-bold text-2xl text-black">Login to Mango</h1>
           
        </section>
        <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-white-800">
    <div class="px-6 py-4">
       
        <form>
            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="+250  Enter your Contact Number" />
            </div>

            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Enter Verification Code"/>
                <input class="block w-full px-4 py-2 mt-2 text-orange-700 placeholder-orange-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Get Verify"/>
                </div>

                <button class="px-6 py-2 text-sm  font-large tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Verify
                </button>
                <div class="flex items-center justify-between mt-4">
                <h2 class="text-sm text-blue-600 dark:text-blue-500 hover:text-blue-500 rounded-lg">Login by Service Number</h2>
            </div>
        </form>
    </div>

    
</div>
        
                
                
           
       
    </main>
   
   </>
  );
}
}

export default Login;
