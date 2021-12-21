import React from 'react'
import './WishlistDetails.css'
import Link from './Link'

const WishlistDetails = ({ item }) => {
  return (
    <>
      <div className='wishlist-details-container'>
        <div className='wishlist-item-desc'>
          {item.desc}
        </div>
        <Link url={item.url}/>
      </div>
    </>
  );
}

export default WishlistDetails