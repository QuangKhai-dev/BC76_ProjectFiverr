import { Dropdown, Space } from 'antd'
import React, { useState } from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const DropdownHeader = ({ buttonContent = "Fiverr Pro", items }) => {
  const [open, setOpen] = useState(false)
  console.log(open)
  return (
    <Dropdown menu={{ items: [{ label: "avbc" }] }} trigger={["click"]} open={open}>
      <button onClick={() => {
        setOpen(!open)
      }}
        className='font-semibold capitalize py-2 px-4 hover:bg-gray-100 duration-200 rounded-md'
      >
        {buttonContent}
        <span className='ml-2'>
          <DownOutlined className={`${open ? "rotate-180" : "rotate-0"} duration-300`} />
        </span>
      </button>
    </Dropdown>
  )
}

export default DropdownHeader