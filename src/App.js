import { Component } from 'react';


import Main from './components/main';
import Login from './components/login';
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/dashboard/dashboard';
import NewProduct from "./components/dashboard/newblog"
import Product from './components/dashboard/product';
import Devices from './components/dashboard/device';
class App extends Component {
  render(){
  return (
   <>
  
<Routes>
<Route axact path="/" element={<Main/>}></Route>
<Route  exact path="/login" element={<Login/>}></Route>
<Route exact path="/dashboard" element={<Dashboard/>}></Route>
<Route exact path="/newproduct" element={<NewProduct/>}></Route>
<Route exact path="/product" element={<Product/>}></Route>
<Route exact path="/device" element={<Devices/>}></Route>

</Routes>
 
 


   
   </>
  );
}
}

export default App;
