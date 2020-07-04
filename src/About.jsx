import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/Images/about.svg';
import Common from './Common';
const About =()=>{
  return(<>
  <Common 
    heading ="Welcome to About page"
    heading2="We are the team of talented Developer making Websites."
    imgsrc={Web}
    btn="Contact-Now"
    path="/contact"
  />

  </>);
}

export default About;