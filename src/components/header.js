import { Link } from "gatsby"
import React from "react"
import './style.scss'

import logo from '../assets/logo.svg'
const Header = () => (
  <header className='header'>
    <div className='logoCont'>
        <Link to="/" >
          <img src={logo} alt='Influensure'/>
        </Link>      
    </div>
    <nav className='navCont'>

      <ul>
        <li>
          <Link to='/'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/'>
            How it Works
          </Link>
        </li>
        <li>
          <Link to='/'>
            Solutions 
            <span> ></span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/'>
            Pricing
          </Link>
        </li>
      </ul>
    
    </nav>
    <div className='btnCont'>
        <Link className='PrimaryBtn' to='/'>
            Get Started Today
        </Link>
    </div>

  </header>
)

export default Header
