import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input, InputNumber } from 'antd'
import { useAppContext } from '@/context'
import { createUser, updateUser } from '@/service/userService'
import { toast } from 'react-toastify'
import { deleteEvent, updateEvent } from '@/service/eventService'

const defaultValues = {
  title: null,
}

const EventModal = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { eventState, dispatch } = useAppContext()
  const { currentEvent, openModal } = eventState
  const initialValues = {
    title: currentEvent?.title
  }
  form.setFieldsValue(initialValues)

  const handleCancel = () => {
    form.setFieldsValue(defaultValues)
    dispatch({ type: 'openEventModal', payload: false})
  }

  const handleSubmit = async (values: any) => {
    const { title } = values;
    const payload = {
      ...currentEvent,
      title: title,
    }
    if (currentEvent?.id) {
      const { data, error, message } = await updateEvent(payload, currentEvent.id)
      if (error) {
        toast.error(message || 'Failed to update')
        return
      }
      dispatch({ type: 'updateEvent', payload: data })
    }
  }

  const handleDelete = async () => {
    if (currentEvent?.id) {
      deleteEvent(currentEvent.id).then((res) => {
        dispatch({ type: 'deleteEvent', payload: currentEvent })
      })
    }
  }

  return (
    <Modal
      forceRender
      title={'Update Event'}
      open={openModal}
      onOk={form.submit}
      onCancel={handleCancel}
      okText={'Update'}
      confirmLoading={loading}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={form.submit}>
          Submit
        </Button>,
        <Button key="delete" type="primary" danger onClick={handleDelete}>
          Delete
        </Button>,
      ]}
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
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EventModal
