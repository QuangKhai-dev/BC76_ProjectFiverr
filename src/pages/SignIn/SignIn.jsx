import React from 'react'
import Icons from '../../components/Icons'
import { Link } from 'react-router-dom'
import { pathDefault } from '../../common/path'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { ButtonOutline } from '../../components/button/ButtonCustom'
const SignIn = () => {
  return (
    <div className='h-screen grid grid-cols-3 py-10'>
      <div className="signIn_animation col-span-2 h-full bg-red-500"></div>
      <div className="signIn_form h-full px-10 flex flex-col justify-between">
        {/* logo and back to homepage  */}
        <div className='flex justify-between items-center'>
          <Icons.logo />
          <Link to={pathDefault.homePage}><ArrowLeftOutlined className='mr-2' />Go back</Link>
        </div>
        {/* form  */}
        <div>
          <h1>Trang đăng nhập</h1>
          <p>Nhập email để bắt đầu truy cập</p>
          <form className='space-y-2'>
            <div>
              <label htmlFor="">Email</label>
              <Input placeholder='Vui lòng nhập email' />
            </div>
            <div>
              <label htmlFor="">Mật khẩu</label>
              <Input placeholder='Vui lòng nhập mật khẩu' />
            </div>
            <div>
              <ButtonOutline className='w-full !py-4' content='Đăng nhập' />
            </div>
          </form>
        </div>
        {/* đăng ký  */}
        <div className='text-center'>
          <span>Chưa có tài khoản? <Link to={pathDefault.signUp} className='font-medium hover:underline duration-200'>Đăng ký tại đây</Link></span>
        </div>
      </div>
    </div>
  )
}

export default SignIn