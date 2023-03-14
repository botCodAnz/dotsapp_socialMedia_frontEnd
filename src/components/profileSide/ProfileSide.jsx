import React from 'react'

import LogoSearch from '../logoSearch/LogoSearch'
import  ProfileCard  from '../profileCard/ProfileCard'

import './profileSide.css'

function ProfileSide() {
  return (
    <div className='profileSide'>
      <LogoSearch/>
      <ProfileCard location="homePage"/>
      

      
     
    </div>  
  )
}

export default ProfileSide