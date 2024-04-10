import React from 'react'
import '../styles/Navbar.scss'
import Kimage from '../images/Kimage.png'
import clglogo from '../images/clg-logo.png'
function Navbar() {
  return (
    <div className="navbar-main">
        <div className="navbar-inner">
            <div className="k-image">
                <img src={Kimage} alt="k-image" className='kimage'/>
            </div>
            <div className="kongutxt">
                <h2 style={{margin:0}}>KONGU ENGINEERING COLLEGE</h2>
                <h4 style={{margin:0}}>Contoller of Examonations</h4>
            </div>
            <div className="clg-logo">
                <img src={clglogo} alt="clgimage" className='kimage' />
            </div>
        </div>
    </div>
  )
}

export default Navbar