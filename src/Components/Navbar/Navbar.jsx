import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import letstalk from '../../assets/letstalk.svg'
import Arrow from '../../assets/arrow.png'
import line from '../../assets/line.png'

function Navbar() {

  const phoneNumber ='0000000000'; // Replace with your phone number
  const message = 'Hello, I have a question!'; // Replace with your default message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
    <div className='nav_parent' >
    <div className='nav_logo' >
    <img src={logo} alt="logo" />
     

    </div>
    <div className='nav_sec'>
        <p>Home &nbsp;&nbsp;&nbsp; <img className='line' src={line} alt="" /></p>
        <p>Contact &nbsp;&nbsp;&nbsp;<img className='line' src={line} alt="" /></p>
        <p>Services &nbsp;&nbsp;&nbsp;<img className='line'src={line} alt="" /></p>
        <p>Who We Are &nbsp;&nbsp;&nbsp;<img className='line' src={line} alt="" /> </p>
        <p>FAQ's </p>

    </div>
    <div onClick={handleWhatsAppClick} className='nav_letsTalk' >
       <p  >Let's Talk</p>    
    </div>
    <div  onClick={handleWhatsAppClick} className='nav_letsTalki' >
    <img  className='img' src={letstalk} alt="logo" />
    <img className='arrow' src={Arrow} alt="" />
    </div>
    </div>


      
    </>
  )
}

export default Navbar
