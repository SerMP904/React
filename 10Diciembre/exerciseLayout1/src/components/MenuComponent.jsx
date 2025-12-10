import React from 'react'
import { Link } from 'react-router'

const MenuComponent = () => {
  return (
    <nav style={{display: 'flex', gap: '20px', justifyContent:'space-between'}}>
      <Link to={'/'}>Homepage</Link>
      <Link to={'/contact'}>Contact</Link>
    </nav>
  )
}

export default MenuComponent