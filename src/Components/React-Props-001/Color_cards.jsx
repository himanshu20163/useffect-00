import React from 'react'
import './cards.css';

const Color_cards = (props) => {
  return (
    <div className='color-container'>
        <div className='bg-container' style={{backgroundColor:props.color_code}}>
        </div>
       <h5 className='color-code'>{props.color_code}</h5> 
       <p className='color-name' style={{color:props.color_code,fontSize:"12px"}}>{props.color_name}</p>   
    </div>
  )
}

export default Color_cards