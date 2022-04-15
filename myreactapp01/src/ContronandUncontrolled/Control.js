import React,{useState} from 'react'
import Test from './Test'
export default function Control() {
    const[name, setName] = useState('')
    const handleChange = e =>{
        setName(e.target.value)
    }
  return (
    <div>
        <center>
           <h5>Name: {name}</h5> <br/>
            <input type='text' onChange={handleChange}/>
            <Test onChange={handleChange}/>
        </center>
    </div>
  )
}
