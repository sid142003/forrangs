import React , { useState } from 'react'

import './App.css'
import Discoverme from './Components/Discoverme/Discoverme.jsx'
import data from './assets/data.jsx'
import Whoweare from './Components/Who_we_are/Who_we_are.jsx'
import Vision from './Components/Vision/Vision.jsx'
import Mision from './Components/Mission/Mision.jsx'
import Organization from './Components/Organization/Organization.jsx'
import Expertise from './Components/Expertise/Expertise.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VerticalCarousel from './Components/Solution/VerticalCarousel.jsx'
import Osolutionp from './Components/Osolutionp/Osolutionp.jsx'
import Email from "./Components/Sendemail.jsx"
const App = () => {

  return (
    <div className="App">
      <div className='discoverme mar' >
        <Discoverme/>
        </div>
      <div className='wwr mar' >
        <Whoweare/>
        </div>
      <div className='osolutionp mar' >
        <Osolutionp/>
     
       
      
      </div>
      <div className='ovision mar' >
        <Vision/>
      </div>
      <div className='omission mar' >
        <Mision/> 
      </div>
      <div className='oto_otp mar' >
        <Email/>
        <Organization/> 
      </div>
      <div className='oexpertise mar' >
        <Expertise/>
      </div>
      <div className='setvicesscroll mar' >
      <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
      </div>
      <div className='footer mar' >
        <Footer/>
      </div>


    </div>
  )
}

export default App