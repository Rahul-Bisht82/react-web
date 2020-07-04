import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
const Service =()=>{
  return(<>
  <div  className="my-4">
  
    <h1 className="text-center">Our-Services</h1>
    <hr className="w-25 mx-auto" />
  </div>

  <div className="container-fluid ">
    <div className="row">
      <div className="col-10 mx-auto">
      <div className="row gy-4 card-div">
      {
    Sdata.map((val,index)=>{
      return <Card 
      key={index}
        image ={val.imgsrc}
        title={val.title}
      />
    })
  }
  
      </div>

      </div>
    </div>
  </div>





  
  
  </>);
}

export default Service;