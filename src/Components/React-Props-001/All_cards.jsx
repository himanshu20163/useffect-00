import React from 'react'
import './cards.css';
import Color_cards from './Color_cards';

const All_cards = (props) => {
  return (
    <div className='card-container'>
        <Color_cards color_name="PINK" color_code="#FF6663" />
        <Color_cards color_name="GRAY" color_code="#333333"/>
        <Color_cards color_name="BLACK" color_code="#000000"/>
        <Color_cards color_name="GREEN" color_code="#38BB14"/>
        <Color_cards color_name="RED" color_code="#C90B0B"/>
        <Color_cards color_name="ORANGE" color_code="#FF8000"/>
        <Color_cards color_name="YELLOW" color_code="#FFF500"/>
        <Color_cards color_name="LIGHT GRAY" color_code="#CCCCCC"/>
        <Color_cards color_name="PURPLE" color_code="#7E41A2"/>
        <Color_cards color_name="BROWN" color_code="#C14911"/>
    </div>
  )
}

export default All_cards