import React from 'react'
import './SecretSanta.css'
import CustomList from '../../core/ui/CustomList'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import axios from 'axios'


const SecretSantaScreen = () => {
  const giftee = useSelector(state => state.login.giftee)
  const { wishlist, loading } = useSelector(state => state.secretSanta)
  return (
    <>
      <div className='main-container'>
        <img className='avatar' src={`${axios.defaults.baseURL}/img/${giftee.name?.toLowerCase()}.jpg`} />
        <span className='name'>{giftee.name}</span>
        {(!loading) ?
          <CustomList
            title={`${giftee.name}'s Wishlist`}
            items={wishlist} /> :
          <Loader
            type='Rings'
            color="#00BFFF"
            height={80}
            width={80} />}
      </div>
    </>
  )
}

export default SecretSantaScreen