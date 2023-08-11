import React from 'react'
import Blogcomponent from './Blogcomponent'
import Img1  from  './image/blog-img-1.jpg'; 
import Img2  from  './image/blog-img-2.png'; 
import Img3  from  './image/blog-img-3.png'; 
import one from './image/one.jpg';
import two from './image/two.jpg';


const Allblog = (props) => {
  return (
    <div>
        <Blogcomponent image={one} profile_name="swati" heading="this is first heading" 
        date="sept 4" time="15 min read" category="technology" bg={Img1}/>
        <Blogcomponent image={two} profile_name="sahu" heading="this is second heading"
        date="oct 15" time="23 min read" category="business" bg={Img2}/>
        <Blogcomponent image={one} profile_name="himanshu" heading="this is third heading" 
        date="jan 4" time="5 min read" category="education" bg={Img3}/>
    </div>
  )
}

export default Allblog