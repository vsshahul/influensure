import React from "react"
//import { Link } from "gatsby"
import leftDots from '../assets/leftDots.svg'
import logoSymbol from '../assets/logoSymbol.svg'
import rightSpeaker from '../assets/rightSpeaker.svg'
import leftSpeaker from '../assets/leftSpeaker.svg'


import f1 from '../assets/form_1.png'
import f2 from '../assets/form_2.png'
import f3 from '../assets/form_3.png'

const HowItWorks = () => (
  <>
  <div className='headerCont'>

    <div className='dotsCont'>
      <img src={leftDots} alt='design' />
    </div>

    <div className='header'>
      <img src={logoSymbol} alt='logo' />
      <p>How It Works</p>
    </div>

    <div className='speakerCont'>
      <img src={rightSpeaker} alt='design' />
    </div>

  </div>
  
  <div className='content'>
    <div className='textCont'>
      <h3>01</h3>
      <h2>Share Requirements</h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique. 
      </p>
    </div>

    <div className='imgCont'>
      <img src={f1} alt='formDemo' />
    </div>
  </div>

  <div className='content'>
    <div className='textCont'>
      <h3>02</h3>
      <h2>Find & manage talent with easy search features.</h2>
      <p>
      Find exactly who you need, when you need them. Utilize our expansive network of influencers or import your own. Target influencers and their audience by specific keywords, demographics, interests, location, and that’s just the start.      </p>
    </div>

    <div className='imgCont'>
      <img src={f2} alt='formDemo' />
    </div>
  </div>

  <div className='content'>
    <div className='textCont'>
      <h3>03</h3>
      <h2>Connect with influencers.</h2>
      <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique.
      </p>
    </div>

    <div className='imgCont'>
      <img src={f3} alt='formDemo' />
    </div>
  </div>

  <div className='designCont'>

    <div className='speakerCont'>
      <img src={leftSpeaker} alt='design' />
    </div>

    <div className='dotsCont'>
      <img src={leftDots} alt='design' />
    </div>

  </div>

  
  </>
)

export default HowItWorks;