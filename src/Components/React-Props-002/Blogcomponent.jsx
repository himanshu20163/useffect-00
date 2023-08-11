import React from 'react'
import './blog.css';
import blog1 from "./image/blog-img-1.jpg";

const Blogcomponent = (props) => {
    return (
        <div className='blog-container'>
            <div className="blog-left-container">
                <div className="blog-admin-detail">
                    <img src={props.image} className='profile-img'></img>
                    <p>{props.profile_name}</p>
                </div>
                <h2>{props.heading}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio similique nisi id cumque reprehenderit cum magni ea optio quas
                </p>
                <div className='blog-read-descripiton'>
                    <div className="blog-description-left">
                        <div className="blog-date">
                            <span>{props.date}</span>
                        </div>
                        <div className="blog-read-time">
                            <span>{props.time}</span>
                        </div>
                        <div className="blog-category">
                            <span>{props.category}</span>
                        </div>
                    </div>
                    <div className="blog-description-right">
                    <img src="https://cdn-icons-png.flaticon.com/512/494/494568.png" className='bookmark-img'></img>
                    </div>
                </div>
            </div>
            <div className="blog-right-container">
               <img src={props.bg}></img>
            </div>
        </div>
    )
}

export default Blogcomponent