import React from "react"
import logo from '../assets/footer_logo.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import '@mdi/font/css/materialdesignicons.min.css';
const Footer = (props) => {
  return <footer className='footerCont'>
    <div className='logo'>
        <Link to="/" >
          <img src={logo} alt='Influensure'/>
        </Link>
    </div>
    <div className='icons'>
        <Link to="/" >
          <img src={facebook} alt='fb'/>
        </Link>
        <Link to="/" >
          <img src={instagram} alt='instagram'/>
        </Link>
        <Link to="/" >
          <img src={linkedin} alt='linkedin'/>
        </Link>
    </div>
    <div className='links'>
        <Link to="/" >
          About Us
        </Link>
        <Link to="/" >
         Solutions
        </Link>
        <Link to="/" >
          Blog
        </Link>
        <Link to="/" >
         Pricing
        </Link>
    </div>
    <div className='cp'>
      <p>
      <i className='mdi mdi-copyright'/> 2020 influensure
      </p>
    </div>
  </footer>
}

export default Footer;