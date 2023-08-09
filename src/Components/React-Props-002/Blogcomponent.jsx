import React from 'react'
import './blog.css';
import blog1 from "./image/blog-img-1.jpg";

const Blogcomponent = () => {
    return (
        <div className='blog-container'>
            <div className="blog-left-container">
                <div className="blog-admin-detail">
                    <img src="./image/one.jpg" className='profile-img'></img>
                    <p>ahsdvahdva</p>
                </div>
                <h2>this is a heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio similique nisi id cumque reprehenderit cum magni ea optio quas
                </p>
                <div className='blog-read-descripiton'>
                    <div className="blog-description-left">
                        <div className="blog-date">
                            <span>Dec 4 . </span>
                        </div>
                        <div className="blog-read-time">
                            <span>6 min read</span>
                        </div>
                        <div className="blog-category">
                            <span>web 3</span>
                        </div>
                    </div>
                    <div className="blog-description-right">
                    <img src="https://cdn-icons-png.flaticon.com/512/494/494568.png" className='bookmark-img'></img>
                    </div>
                </div>
            </div>
            <div className="blog-right-container">
               <img src={blog1}></img>
            </div>
        </div>
    )
}

export default Blogcomponent