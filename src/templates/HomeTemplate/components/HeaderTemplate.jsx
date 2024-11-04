import React from 'react'
import Icons from '../../../components/Icons'
import { Link, useNavigate } from 'react-router-dom'
import { pathDefault } from '../../../common/path'
import DropdownHeader from '../../../components/dropdown/DropdownHeader'
import { ButtonGhost, ButtonOutline } from '../../../components/button/ButtonCustom'
import { GlobalOutlined } from '@ant-design/icons'
import InputSearch from '../../../components/input/inputSearch/InputSearch'

const HeaderTemplate = () => {
  const navigate = useNavigate()
  return (
    <header className='py-4 border-b border-b-gray-200'>
      <div className="container">
        <div className="header_content flex items-center justify-between">
          {/* // logo  */}
          <div className='flex flex-1 space-x-2 items-center'>
            <Link to={pathDefault.homePage}>
              <Icons.logo />
            </Link>
            <InputSearch placeholder={"What service are you looking for today?"} />
          </div>
          {/* search input  */}
          <div className="header_action space-x-1">
            <DropdownHeader buttonContent='Fiverr Pro' />
            <DropdownHeader buttonContent='Explore' />
            <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
            <ButtonGhost content={"Become a Seller"} />
            <ButtonGhost content={"Sign In"} />
            <ButtonOutline onClick={() => {
              navigate(pathDefault.signIn)
            }} content={"Join"} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderTemplate