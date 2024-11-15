import { Select } from 'antd'
import React from 'react'

const SelectCustom = ({ labelContent, options, mode, handleChange }) => {
  return (
    <div>
      <label className='font-medium mb-1 block' htmlFor="">{labelContent}</label>
      <Select
        onChange={handleChange}
        mode={mode && mode}
        className='w-full'
        options={options}
      />
    </div>
  )
}

export default SelectCustom