import React from 'react'
import './Osolutionp.css'
import Osolutionpslider  from '../Osolutionp/Osolutionpslider.jsx'

const Osolutionp = () => {
  return (
    <>
    <div className='osolutionpparent' >

        <div className='osolpu' >
            <div className='osolpul'> <p>Our Solution</p>
            <p className='osoltext' >
            <span style={{"color":"black " , "fontWeight":"700"}} >Forrangs Solutions</span> is a service-based startup that specializes in various domains of Technology and Finance. <span style={{"color":"black " , "fontWeight":"700"}} >"Forrangs"</span>   signifies  <span style={{"color":"black " , "fontWeight":"700"}} >priority</span>, emphasizing our commitment to placing our clients at the forefront.
               </p> </div>
            <div className='osolpur'>
                <p className='a' >Graphic Designing</p>
                <p className='b' >UI/UX Designing</p>
                <p className='d' >Web Development</p>
                <p className='f' >Game Development</p>
                <p className='c' >Video Editing</p>
                <p className='e' >App Development</p>
                <p className='g' >Personal Finance</p>
                <p className='h' >AR Application</p>
            </div>

        
        </div>
        <div className='osolpl' >
           
           <Osolutionpslider/>
        </div>



      
    </div>
    </>
  )
}

export default Osolutionp
