import React from 'react'
import Input from './Input'
import Submit from './Submit'


const Hero = () => {
  return (
    <div id='hero'>
        <div className="container hero">
        <h1>Generate more leads with a professional landing page!</h1>
        <div className='search'>
          <Input/>
          <Submit/>
         </div>
        </div>
      
    </div>
  )
}

export default Hero