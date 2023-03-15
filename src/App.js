import { Component } from 'react';


import Main from './components/main';
import Login from './components/login';
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/dashboard/dashboard';
import Devices from './components/dashboard/device';
import Price from './components/dashboard/price';
import Recharge from './components/dashboard/recharge';
import Shop from './components/dashboard/shop';
import Balance from './components/dashboard/balance';
import Home from './components/dashboard/home';
import Table from './components/dashboard/table';
class App extends Component {
  render(){
  return (
    <>
      <Routes>
        <Route axact path="/" element={<Main />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/device" element={<Devices />}></Route>
        <Route exact path="/price" element={<Price />}></Route>
        <Route exact path="/recharge" element={<Recharge />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/balance" element={<Balance />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/table" element={<Table/>}></Route>
      </Routes>
    </>
  );
}
}

export default App;
