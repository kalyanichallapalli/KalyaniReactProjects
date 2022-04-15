import React from 'react'

function Test(props) {
  return (
    <div>
     <input type='text' onChange={props.handleChange}>Test Componet</input>
    </div>
  )
}

export default Test;