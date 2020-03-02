//import { Link } from "gatsby"
import React from "react"
import './style.scss'
import HowItWorks from './HowItWorks'
import gridImg from '../assets/gridImg.png'
const LandingPage = () => (
  <>
  <div className='heroCont'>
    <h2 className='heading' >Reach the next billion</h2>
    <p className='sub-heading'>We connect brands with targeted audience through nano influencer marketing. Save time and improve performance. Take the guesswork out of Influencer analysis with  data-driven audience insights, managed in one easy to use platform.</p>
    <div className='btnCont'>
      <button className='PrimaryBtn'>I'm a Brand</button> 
      <button className='SecondaryBtn'>I'm an Influencer</button> 
    </div>  
    <div className='gridImgCont'>
      <img src={gridImg} alt='Influencers'/>
    </div>
  </div>

  <HowItWorks />

  <div className='checkOutCont'>
    <h2>Ready to check it out?</h2>
    <h4>Get started for free, no strings attached</h4>
    <div className='btnCont'>
      <button className='PrimaryBtn'>I'm a Brand</button> 
      <button className='SecondaryBtn'>I'm an Influencer</button> 
    </div>
  </div>
  </>
)

export default LandingPage;
