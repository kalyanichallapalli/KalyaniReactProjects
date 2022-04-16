import React,{useState, useEffect} from 'react'

export default function UseEffect() {
    let [count, setCount] = useState(0);

     useEffect(()=>{
      setTimeout(()=>{
          setCount((count)=> count + 1)
      }, [2000])
    })

  return (
    <div>
        <h5>The Count is: {count}</h5>
    </div>
  )
}
