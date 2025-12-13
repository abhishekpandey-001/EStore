import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center gap-16 bg-gray-700 py-3 px-8'>
      <img className='w-12' src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png" alt="" />
      <div className='text-xl flex gap-7'>
        <MenuBar to={'/'} title={'Home'} />
        <MenuBar to={'/products'} title={'Products'} />
      </div>
    </div>
  )
}

const MenuBar = ({ to, title }) => {
  return (
    <NavLink className={({isActive})=> isActive?'text-[lightseagreen]' : ''} to={to}>{title}</NavLink>
  )
}

export default Navbar
