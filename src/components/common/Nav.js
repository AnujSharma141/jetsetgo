import React from 'react'
import logo from '../../assets/img/logo.png'

export default function Nav() {
  return (
    <nav className='nav'>
    <img className="nav-logo" src={logo} alt="" />
    <p className="nav-text">JetSetGo.</p>
</nav>
  )
}
