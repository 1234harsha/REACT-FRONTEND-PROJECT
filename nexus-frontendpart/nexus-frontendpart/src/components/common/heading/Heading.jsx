import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h3 style={{marginLeft:"20px"}}>{subtitle} </h3>
        <h1 style={{marginLeft:"20px"}}>{title} </h1>
      </div>
    </>
  )
}

export default Heading
