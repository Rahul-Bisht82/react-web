import React from 'react';
import { NavLink } from 'react-router-dom';

const Common =(props)=>{
  return(<>
  <section  className="d-flex justify-content-center align-items-center ">

      <div className="container-fluid home-div ">
    <div className="row ">
      <div className="col-10 mx-auto  ">
      <div className="row ">    
          <div className="col-md-6 order-2 order-lg-1 pt-5 pt-lg-o d-flex justify-content-center flex-column">
          <h1 className="Heading">{props.heading} <strong className="brand-name"> Rahul Bisht</strong></h1>
          <h2 className="my-2 heading-2"> {props.heading2} </h2>
          <div className="mt-3 ">
            <NavLink exact to={props.path} className="btn-get-started">{props.btn}</NavLink>
          </div>
        </div>
        <div className="col-md-6 order-1 order-lg-2 header-img">
          <img src={props.imgsrc} className="img-fluid animated" alt="home" />
          </div>

        </div>
      </div>
    </div>
  </div>
  
  </section>

  </>);
}

export default Common;