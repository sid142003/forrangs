import React from 'react'
import './Who_we_are.css'
import letstalk from '../../assets/letstalk.svg'
import Arrow from '../../assets/arrow.png'
function Who_we_are() {
  return (
    <>
    <div className='parentwwr' >
        <div className='wwrleft'>
          <div className='wwrlu' >
            <p>
            Who we are?
            </p>
          
          </div>
          <div className='wwrlb'>
          <p>
           
            We strive to transform challenges into opportunities, leveraging the latest advancements in technology to drive innovation and efficiency for our clients.
            </p>
          </div>

        </div>
        <div className='wwrright' >
            <div>
                
            </div>
            <p>
        We are a dynamic group of students from the Indian Institute of Information Technology Vadodara (An Institute of National Importance, established in 2013), united by a shared passion for serving individuals' needs in the realms of Technology and Finance. Whether it's crafting a personalized portfolio website or developing a robust business application, we stand ready to collaborate with you and transform your ideas into reality. Your vision is our inspiration, and we are committed to bringing it to life.    
        </p>
                



      

    <div className='wwrbutton' >
    <div className='wwr_letsTalk' >
       <p>Let's Talk</p>    
    </div>
    <div className='wwr_letsTalki' >
    <img src={letstalk} alt="logo" />
    <img className='arrow' src={Arrow} alt="" />
    </div>
    </div>
            </div>
    </div>
    </>
  )
}

export default Who_we_are
