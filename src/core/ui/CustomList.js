import './List.css'
import React, { useState } from 'react'
import { List, Form, Input, Button, Divider, notification } from "antd"
import giftIcon from '../../img/gift-icon.jpg'
import { PlusOutlined } from "@ant-design/icons";
import TextArea from 'antd/lib/input/TextArea';
import { Modal } from 'antd'
import WishlistDetails from '../../core/ui/WishlistDetails'
import WishlistNetwork from '../../wishlist/network/WishlistNetwork';
import { useSelector } from 'react-redux';


const CustomList = ({ items, title, onItemAdded, onItemClick }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [modalItem, setModalItem] = useState({})
  const [_items, setItems] = useState(items)
  const { user } = useSelector(state => state.login)


  const showModal = (item) => {
    setModalItem(item)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderHeader = () => {
    if (onItemAdded) {
      if (!title) throw 'Title cannot be null if showAdd is set to true'
      return (
        <div
          className='list-title'
          onClick={() => {
            if (_items[0]?.add) {
              setItems(_items.slice(1))
              return
            }
            setItems([{ add: true }, ..._items])
          }}>
          {title}
          <PlusOutlined />
        </div>
      )

    }
    else if (title) {
      return (
        <div className='list-title'>
          {title}
        </div>)
    }
  }


  const addForm = () => {
    return (
      <div className='add-form'>
        <Form
          name='add-form'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={async (values) => {
            const temp = _items.slice(1)
            setLoading(true)
            setItems(temp)
            const newItem = { ...values, add: null }
            const msg = await WishlistNetwork.addWishlistItem(user.id, newItem)
            notification.success({ message: msg })
            setItems([{ ...values, add: null }, ...temp])
            setLoading(false)
          }}
          onFinishFailed={(errorInfo) => { console.log(errorInfo) }}
          autoComplete="off">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input a name' }]}>
            <Input size='large' placeholder='Name' allowClear />
          </Form.Item>

          <Form.Item
            name="desc"
            rules={[{ required: false }]}>
            <TextArea size='large' placeholder='Description' allowClear />
          </Form.Item>
          <Form.Item
            name="url"
            rules={[{ required: false }]}>
            <Input size='large' placeholder='Link' allowClear allowClear />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Divider />
        </Form>
      </div>
    )
  }

  const renderItem = (item) => {
    return (
      <div>
        <div className={`add-container ${item.add ? 'expanded' : 'collapsed'}`}>
          {addForm()}
        </div>
        {!item.add && <List.Item
          className='list-item-container'
          onClick={() => showModal(item)}
          style={{ padding: 0 }}>
          <div className='list-item' >
            <img src={giftIcon} />
            <div className='list-item-text-container'>
              <div className='list-item-title'>{item.name}</div>
              <div className='list-item-desc'>{item.desc}</div>
            </div>
          </div>
        </List.Item>}
      </div>

    )
  }


  return (
    <>
      <List
        loading={isLoading}
        className='list'
        header={renderHeader()}
        bordered
        dataSource={_items}
        renderItem={item => renderItem(item)}
      />

      <Modal
        title={modalItem.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        header={null}
        centered>
        <WishlistDetails item={modalItem} />
      </Modal>
    </>
  )
}


export default CustomList