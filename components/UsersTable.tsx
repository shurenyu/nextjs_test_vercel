import React, { useMemo } from 'react'
import { IUser } from '@/lib/interfaces'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useAppContext } from '@/context'
import { deleteUser } from '@/service/userService'
import { toast } from 'react-toastify'

interface IProps {
  users: IUser[]
}

const UsersTable = ({ users }: IProps) => {
  const { dispatch } = useAppContext()
  const columns: ColumnsType<IUser> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ]

  const handleEdit = (record: IUser) => {
    const payload = {
      currentUser: record,
      openModal: true
    }
    dispatch({ type: 'updateUserState', payload })
  }

  const handleDelete = (record: IUser) => {
    if (!record.id) {
      toast.error('Something went wrong')
      return
    }
    deleteUser(record.id).then((res) => {
      dispatch({ type: 'deleteUser', payload: record })
    })
  }

  return (
    <Table
      rowKey={'id'}
      columns={columns}
      dataSource={[...users]}
      pagination={false}
    />
  )
}

export default UsersTable
