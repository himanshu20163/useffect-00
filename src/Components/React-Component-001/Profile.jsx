import React from 'react'
import Experience from './Experience'
import Educator from './Educator'
import Skills from './Skills'
import Hobbies from './Hobbies'

const Profile = () => {
  return (
    <div className='profile-container'>
         <h1>Himanshu Sahu</h1>
         <p>Software Developer , Educator at Geekster</p>
         <span>
         <a href='https://www.linkedin.com/in/himanshu-sahu-a864a9169/' target='_blank'>Linkedin</a>&nbsp;
         <a href='https://github.com/himanshu20163' target='_blank'>Github</a>
         </span>
         <hr/>
         <Experience />
         <hr/>
         <Educator />
         <hr/>
         <Skills />
         <hr/>
         <Hobbies />
    </div>
  )
}

export default Profile