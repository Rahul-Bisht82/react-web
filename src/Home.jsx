import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/Images/home.svg';
import Common from './Common';
const Home =()=>{
  return(<>
  <Common 
    heading ="Grow your Business with"
    heading2="We are the team of talented Developer making Websites."
    imgsrc={Web}
    btn="Get-Started"
    path="/service"
  />

  </>);
}

export default Home;