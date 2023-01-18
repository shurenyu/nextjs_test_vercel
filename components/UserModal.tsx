import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input, InputNumber } from 'antd'
import { useAppContext } from '@/context'
import { createUser, updateUser } from '@/service/userService'
import { toast } from 'react-toastify'

const defaultValues = {
  id: null,
  name: null,
  email: null,
  age: null
}

const UserModal = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { userState, dispatch } = useAppContext()
  const { currentUser, openModal } = userState
  const initialValues = currentUser ?? defaultValues
  form.setFieldsValue(initialValues)

  const handleCancel = () => {
    form.setFieldsValue(defaultValues)
    dispatch({ type: 'openUserModal', payload: false})
  }

  const handleSubmit = async (values: any) => {
    const { name, email, age } = values;
    const userData = {
      name: name,
      email: email,
      age: age
    }
    if (currentUser?.id) {
      const { data, error, message } = await updateUser(userData, currentUser.id)
      if (error) {
        toast.error(message || 'Failed to update')
        return
      }
      dispatch({ type: 'updateUser', payload: data })
    } else {
      const { data, error, message } = await createUser(userData)
      if (error) {
        toast.error(message || 'Failed to create')
        return
      }
      dispatch({ type: 'createUser', payload: data })
    }
  }

  return (
    <Modal
      forceRender
      title={currentUser ? 'Update User' : 'Create User'}
      open={openModal}
      onOk={form.submit}
      onCancel={handleCancel}
      okText={currentUser ? 'Update' : 'Create'}
      confirmLoading={loading}
    >
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={handleSubmit}
        size='large'
        preserve={false}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input age!' }]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserModal
