import React from 'react'
import './inputSearch.scss'
import { Input } from 'antd'

const InputSearch = ({ placeholder, value, handleChange, handleClick }) => {
  return (
    <Input.Search onClick={handleClick} onChange={handleChange} className='input_search' placeholder={placeholder} />
  )
}

export default InputSearch