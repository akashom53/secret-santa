import React from 'react'
import Loader from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import CustomList from '../../core/ui/CustomList'
import './WishlistScreen.css'


const WishlistScreen = () => {
  const { wishlist, loading } = useSelector(state => state.wishlist)

  return (

    <div className='main-container'>
      {loading ?
        <Loader
          type='Rings'
          color="#00BFFF"
          height={80}
          width={80} /> :
        <CustomList
          title='Your Wishlist'
          onItemAdded={() => {
          }}
          items={wishlist} />}
    </div>
  )
}


export default WishlistScreen