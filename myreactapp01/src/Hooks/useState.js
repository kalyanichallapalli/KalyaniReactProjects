import React,{useState} from 'react'

function UseState() {
    let[name,setName] = useState('')
  return (
    <div>
        <h5>Inc count: {name}</h5>
        <button onClick={()=> setName('kalyani')}>change</button>
        <button onClick={()=> setName('kalyani challapalli')}>changename</button>

    </div>
  )
}

export default UseState