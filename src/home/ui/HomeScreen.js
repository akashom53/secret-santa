import React, { useState, useEffect } from 'react'
import { Tabs, PageHeader, notification } from 'antd';
import SecretSantaScreen from '../../secret-santa/ui/SecretSantaScreen';
import WishlistScreen from '../../wishlist/ui/WishlistScreen';
import './HomeScreen.css'
import WishlistNetwork from '../../wishlist/network/WishlistNetwork';
import { useDispatch, useSelector } from 'react-redux';
import { setSecretSantaLoading, setWishlist } from '../../secret-santa/state/secretSantaSlice';
import { setSelfWishlist, setWishlistLoading } from '../../wishlist/state/wishlistSlice';
const { TabPane } = Tabs;

const HomeScreen = () => {
  const [selectedTab, setselectedTab] = useState(0)
  const secretSantaLoading = useSelector(state => state.secretSanta.loading)
  const wishlistLoading = useSelector(state => state.wishlist.loading)
  const { user, giftee } = useSelector(state => state.login)
  const dispatch = useDispatch()

  useEffect(async () => {
    if (selectedTab == 0) {
      if (!user.id) return
      if (!secretSantaLoading) {
        dispatch(setSecretSantaLoading(true))
        try {
          const wishlist = await WishlistNetwork.fetchWishlist(giftee.id)
          dispatch(setWishlist(wishlist))
        } catch (e) {
          notification.warn(e)
        }
        dispatch(setSecretSantaLoading(false))
      }
    } else {
      if (!wishlistLoading) {
        dispatch(setWishlistLoading(true))
        const wishlist = await WishlistNetwork.fetchWishlist(user.id)
        dispatch(setSelfWishlist(wishlist))
        dispatch(setWishlistLoading(false))
      }
    }
  }, [selectedTab, user])

  return (
    <div>
      <PageHeader
        className='header'
        title={`Hello ${user.name}`}
        footer={
          <Tabs defaultActiveKey={selectedTab} onChange={(key) => { setselectedTab(key) }}>
            <TabPane tab="Secret Santa" key="0" />
            <TabPane tab="Wishlist" key="1" />
          </Tabs>
        }
      />
      <div className='content'>
        {selectedTab == 0 ? <SecretSantaScreen /> : <WishlistScreen />}
      </div>
    </div>
  )
}


export default HomeScreen