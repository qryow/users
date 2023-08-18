import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create</Link>
      <Link to='/favourites'>Favourites</Link>
    </div>
  )
}

export default Navbar