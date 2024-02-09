import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
          
            <li>
              <Link to='/about'>Case Studies</Link>
            </li>
            <li>
              <Link to='/'>Login</Link>
            </li>
            <li>
              <Link to='/journal'>Latest Events</Link>
            </li>
            <li>
              <Link to='/'>Register</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
