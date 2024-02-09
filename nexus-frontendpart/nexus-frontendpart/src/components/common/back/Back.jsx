import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <div className='margin'></div>
      </section>
  
    </>
  )
}

export default Back
