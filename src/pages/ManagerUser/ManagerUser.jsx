import React, { useContext, useEffect, useState } from 'react'
import { nguoiDungService } from '../../services/nguoiDung.service'
import { Avatar, Button, DatePicker, Input, Modal, Popconfirm, Table, Tag } from 'antd'
import { NotificationContext } from '../../App'
import InputCustom from '../../components/input/inputCustom/InputCustom'
import SelectCustom from '../../components/select/selectCustom/SelectCustom'
import { skillService } from '../../services/skill.service'
import FormAddUser from './components/FormAddUser/FormAddUser'




const ManagerUser = () => {
  const handleNotification = useContext(NotificationContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listNguoiDung, setListNguoiDung] = useState([]);

  const layDanhSachNguoiDung = () => {
    nguoiDungService.layDanhSachNguoiDung().then((res) => {
      console.log(res)
      setListNguoiDung(res.data.content)
    }).catch((err) => {
      console.log(err)
    })
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1"
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "2"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3"
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "4",
      render: (text, record, index) => {
        // Quang Khải ==> Q  split()
        return text ? <img src={text} className='w-10 h-10' /> : <Avatar size={40}>{record.name[0]}</Avatar>
      }
    },
    {
      title: "Chức vụ",
      dataIndex: "role",
      key: "5",
      render: (text, record, index) => {
        return text == "ADMIN" ? <Tag color="magenta">{text}</Tag> : text == "USER" ? <Tag color="blue">{text}</Tag> : text == "" ? <Tag color="purple">CHƯA XÁC ĐỊNH</Tag> : <Tag color="gold">{text}</Tag>
      }
    },
    {
      title: "Hành động",
      key: "5",
      render: (text, record, index) => {
        return <div className='space-x-3'>
          <Popconfirm
            title="Thực hiện xoá người dùng"
            description="Bạn có chắc muốn xoá người dùng không?"
            onConfirm={() => {

              nguoiDungService.xoaNguoiDung(record.id).then((res) => {
                layDanhSachNguoiDung()
                handleNotification('success', res.data.message)
              }).catch((err) => {
                layDanhSachNguoiDung()
                handleNotification('error', err.response.data.content)
              })
            }}
            onCancel={() => { }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Xoá</Button>
          </Popconfirm>
          <Button className='border-yellow-500 text-yellow-500'>Sửa</Button>
        </div>
      }
    }
  ]

  useEffect(() => {
    layDanhSachNguoiDung()
  }, [])

  return (
    <div className='space-y-3'>
      <h1 className='font-bold text-3xl'>Danh sách người dùng trong hệ thống</h1>
      <Button onClick={() => {
        setIsModalOpen(true)
      }} variant="solid" className='bg-green-600 text-white' size='large'>Thêm người dùng</Button>
      <Table dataSource={listNguoiDung} columns={columns} />
      <Modal onCancel={() => {
        setIsModalOpen(false)
      }} footer={null} title="Thêm người dùng" open={isModalOpen}>
        <FormAddUser handleCloseModal={() => {
          setIsModalOpen(false)
        }} layDanhSachNguoiDung={layDanhSachNguoiDung} />
      </Modal>
    </div>
  )
}

export default ManagerUser