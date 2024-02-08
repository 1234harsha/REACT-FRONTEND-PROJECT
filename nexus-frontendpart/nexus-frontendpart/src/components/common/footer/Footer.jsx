import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>NEXUS</h1>
          
            <p>To keep up to date with our latest news and events, sign up to our mailing list..</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
        
        
       
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved |  <i className='fa fa-heart'></i> by TEAM 5
        </p>
      </div>
    </>
  )
}

export default Footer
