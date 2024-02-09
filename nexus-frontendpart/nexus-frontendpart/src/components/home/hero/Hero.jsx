import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='NEXUS UNIVERSITY' title='Best Education Expertise' />
            <p style={{marginLeft:"15px"}}>A vibrant community for innovators and entrepreneurs. We help you make the right connections to realise your ambitions, innovate and grow.</p>
            <div className='button'>
              <button className='primary-btn' style={{marginLeft:"10px"}}>
                About Us <i className='fa fa-long-arrow-alt-right'></i>
              </button>
             
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
