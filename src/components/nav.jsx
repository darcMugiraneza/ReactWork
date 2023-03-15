import { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component{
    render(){
        return(
            <>
            <nav class="bg-white p-0 m-0 fixed w-full z-10 top-0">
        <div class="container mx-auto flex flex-wrap items-center">
		    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-black font-extrabold">				
				
            </div>
			<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li class="mr-0.5">
					<Link className="inline-block py-2 px-4 text-black cursor-pointer hover:text-orange-500 no-underline" to="/home">Home</Link>
				  </li>
                  <li class="mr-0.5">
					<Link className="inline-block py-2 px-4 text-black hover:text-orange-500 no-underline" to="/table">Packs</Link>
				  </li>

                  <li class="mr-0.5">
					<Link className="inline-block py-2 px-4 text-black no-underline hover:text-orange-500 " to="/device">Devices</Link>
				  </li>
				  <li class="mr-8 ml-0.5">
				  <Link className="inline-block py-2 px-4 text-black cursor-pointer hover:text-orange-500 no-underline" to="/price">Bundle Price</Link>
				  </li>
				  <img class=" w-60 h-5 max-w-3xl  font-semibold  capitalize" src="http://www.mango4g.rw/images/logo_new.png" alt=""></img>
                  <li class="mr-0.5 ml-8 ">
					<Link className="inline-block py-2 px-4 text-black hover:text-orange-500 no-underline" to="/balance">Balance Checking</Link>
				  </li>

                  <li class="mr-0.5">
					<Link className="inline-block py-2 px-4 text-black no-underline hover:text-orange-500 " to="/shop">Shop Finder</Link>
				  </li>
				  <li class="m-0">
					<Link className="inline-block py-2 px-4 text-black hover:text-orange-500 no-underline" to="/recharge">Recharge</Link>
				  </li>

                  <li class="mr-1 rounded-lg ">
					<Link className="text-orange-600 hover:text-orange-500 rounded-lg" to="/login">Login</Link>
				  </li>
				</ul>
			</div>
        </div>
    </nav>



            </>
        )
    }
}

export default NavBar;