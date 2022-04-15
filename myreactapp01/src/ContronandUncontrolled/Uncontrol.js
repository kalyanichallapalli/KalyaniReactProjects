import React, { useRef } from 'react'

function Uncontrol() {
    const inputRef = React.useRef('');
    const HandleSubmit = (e)=>{
        e.preventDefault();
        alert(inputRef.current.value)
    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input type='text' ref={inputRef}></input>
            <input type='submit' value='submit'></input>
        </form>
    </div>
  )
}

export default Uncontrol