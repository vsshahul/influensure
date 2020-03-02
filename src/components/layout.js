import React from "react"
import Header from "./header"
import Footer from './footer'
//import "./layout.css"
const Layout = ({ children }) => {
  return (
    <div className='App'>
      <div className='bg_blue'></div>
      <Header/>
        <main className='mainCont'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
