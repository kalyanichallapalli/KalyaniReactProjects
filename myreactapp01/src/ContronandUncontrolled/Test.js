import React from 'react'

function Test(props) {
    console.log(props)
  return (
    <div>
        Test Component <span/>
        <input type='text' onChange={props.handleChange}></input>
    </div>
  )
}

export default Test;