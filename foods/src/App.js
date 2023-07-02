import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Dishes from "./component/Dishes";
import Menu from "./component/Menu";
import Order from "./component/Order";
import Sing from "./component/Sing";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import Foodhome from "./component/Foodhome";




function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route path="" element={<Foodhome/>}/>
        <Route path="order" element={<Order />} />
        <Route path="dishes" element={<Dishes/>} />
        <Route path="menu" element={<Menu/>} />
        <Route path="sing" element={<Sing/>} />
    </Routes>
   <Footer/>
   
  </BrowserRouter>
  );
}
export default App;
