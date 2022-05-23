import React,{useState} from 'react'
import Test from './Test'
export default function Control(props) {
    console.log(props)
    const[name, setName] = useState('')
    
    const handleChange = e =>{
        setName(e.target.value)
    }
  return (
    <div>
        <center>
           <h5>Name: {name}</h5> <br/>
           Parent componet <span/>
           <input type='text' onChange={handleChange}></input>
            <Test onchange={handleChange}/>
        </center>
    </div>
  )
}
