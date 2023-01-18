import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Typography, Form, Input, Space, Col, Row } from 'antd'
import AuthLayout from '@/layout/AuthLayout'
import { FlexBox } from '@/styles/components'
import { login } from '@/service/authService'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '@/lib/common'
import { setAuthToken } from '@/service'
const { Title, Text, Link } = Typography

const Login = () => {
  const router = useRouter()

  const onFinish = async (values: any) => {
    const { email, password } = values
    const { token, message } = await login(email, password)
    if (!token) {
      toast.error(message)
      return
    }
    setTokenToLocalStorage(token)
    setAuthToken(token)
    router.push('/')
  }

  return (
    <AuthLayout>
      <Space style={{ padding: '0 0 32px 32px' }}>
        <Title>Log In</Title>
      </Space>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        size='large'
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, sm: {offset: 6} }}>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <Row>
        <Col offset={6} span={18}>
          <FlexBox justify='center' gap={12}>
            <Text>Are you new user?</Text>
            <Link href='/sign-up'>Sign up</Link>
          </FlexBox>
        </Col>
      </Row>
    </AuthLayout>
  )
}

export default Login
