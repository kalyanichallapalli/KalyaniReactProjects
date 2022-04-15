import React from 'react'

function Test(props) {
    console.log(props)
  return (
    <div>
        Test Component <span/>
        <input type='text' onChange={props.onchange}></input>
    </div>
  )
}

export default Test;