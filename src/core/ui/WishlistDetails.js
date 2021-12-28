import React from 'react'
import './WishlistDetails.css'
import './Link.css'

const WishlistDetails = ({ item }) => {
  return (
    <>
      <div className='wishlist-details-container'>
        <div className='wishlist-item-desc'>
          {item.desc}
        </div>
        <a className='shopping-link' href={item.url ?? ''} target="_blank">Open Link </a>
      </div>
    </>
  );
}

export default WishlistDetails