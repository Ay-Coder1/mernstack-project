import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
      <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location ="homepage" />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide