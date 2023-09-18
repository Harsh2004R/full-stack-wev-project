import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Welcome from '../Pages/Welcome';
import Footer from "../Components/Footer";
import DeathDate from "../Pages/DeathDate";
import DeathCause from '../Pages/DeathCause';
import Home from "../Pages/Home";
import NotAllow from "../Empty-1/NotAllow";
import AudioVisualizer from '../Empty-1/AudioVisualizer';
import DarkWeb from '../Pages/DarkWeb';
import DarkWebPay from "../Pages/DarkWebPay";
import React3DView from '../Pages/React3DView';
import ScareOn from '../Pages/ScareOn';
import Videos from '../Pages/Videos';
import Podcast from "../Pages/Podcast";
import ScareOnAdmin from '../Pages/ScareOnAdmin';
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/deathdate" element={<DeathDate/>}></Route>
        <Route path="/deathcause" element={<DeathCause/>}></Route>
        <Route path="/foot" element={<Footer/>}></Route>
        <Route path="/notallow" element={<NotAllow/>}></Route>
        <Route path="/audiovisualizer" element={<AudioVisualizer/>}></Route>
        <Route path="/darkweb" element={<DarkWeb/>}></Route>
        <Route path="/darkwebpay" element={<DarkWebPay/>}></Route>
        <Route path="/3D" element={<React3DView/>}></Route>
        <Route path="/scareon" element={<ScareOn/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route>
        <Route path="/podcast" element={<Podcast/>}></Route>
        <Route path="/scare_on_admin" element={<ScareOnAdmin/>}></Route>
      </Routes>
    </>
  )
}

export default AllRoutes