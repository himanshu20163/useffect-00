import React, { useState } from 'react'
import './toggle_box.css';

const Toggle = () => {

  const[state,SetState] = useState(true);
  const[showtext,SetText] = useState("on");

  const change_color = ()=>{
    if(state == true){
      SetState(false);
      SetText("off");
    }
    else{
      SetState(true);
      SetText("on");
    }
    
  }
  return (
    <div className='box' style={{backgroundColor:state?"white":"black",color:state?"black":"white"}}>
        <div className='reached-box'>
        <h1>Overreacted </h1>
        <button style={{background:"pink",color:"black",padding:"5px 10px",height:"50px"}} onClick={change_color}>Toggle{showtext}</button>
        </div> 
        <div style={{display:"flex",flexDirection:"column",margin:"0px auto",width:"50%"}}>
        <h1 style={{color:"pink"}}>The WET Codebase</h1>
        <p>sunday 4th 11min read</p>
        <p>come waste your time with me </p>

        <h1>Goodby , Clean Code </h1>
        <p>friday 22nd 2019 5min read</p>
        <p>let clean code guide you . then let it go .</p>

        <h1 style={{color:"pink"}}>The WET Codebase</h1>
        <p>sunday 4th 11min read</p>
        <p>come waste your time with me </p>
        
        <h1>Goodby , Clean Code </h1>
        <p>friday 22nd 2019 5min read</p>
        <p>let clean code guide you . then let it go .</p>
        </div>

       
      
    </div>
  )
}

export default Toggle