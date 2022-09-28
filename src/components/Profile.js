import React from 'react'

const Profile = () => {
  return (
    <div className='container my-container'>
        <div className='center-align'>
            <img  className="circle" style={{border:"2px solid", marginTop:"10px"}} src='https://robohash.org/ram.png?size=200x200' alt='' />
            <h5>Ramesh verma</h5>
            <h5>Email - abc@abc.com</h5>
        </div>   
        <h3>Your Quotes</h3>  
        <blockquote>
            <h6>If it works dont touch it</h6>
        </blockquote>
        <blockquote>
            <h6>If it works dont touch it</h6>
        </blockquote>
    </div>
  )
}

export default Profile
