import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'

function Footer() {
  return (
    <>
    <div className='parentfooter' >

     <div className='footera' >
      <div className='footeral' >

        <p className='footercon' >Contact Us</p>
        <p className='footerlets'>Let’s  <span className='footerletss' >discuss</span> your </p>
       <span className='visionf' >Vision  <span className='footertalk'>Speak</span> with us </span>

      </div>
      <div className='footerar' >
      123 Main StreetAnytown, 
Noida, MA 56789
Indian
10987654321
asdfghj@gmail.com
      </div>
     </div>
     <br />
     <br />
     <hr />
     <div className='footerb' >
      <div className='footerlogo' >
      <img src={logo} alt="logo" />
      </div>
      <div>
      @right2023,All Right Reserved
      </div>
      
      </div>          











      
    </div>
    </>
  )
}

export default Footer
