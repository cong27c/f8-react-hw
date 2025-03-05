import React from 'react'
import "./Header.css"
function Header() {
  return (
    <header>
      <div className='logo'>
    <a href="/">Product Store</a>
      </div>
      <div className='nav'>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
    </header>
  )
}

export default Header
