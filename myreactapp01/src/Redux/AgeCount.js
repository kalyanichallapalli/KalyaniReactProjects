//Acrion Creator 
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

function AgeCount() {
    const age = useSelector(state=> state.age)
    const dispatch = useDispatch();

    const AgeUp =()=>{
        dispatch({type:"AgeUp"})
    }
    const AgeDown=()=>{
        dispatch({type: "AgeDown"})
    }

  return (
    <div>
        <h2>Age: {age}</h2>
        <button onClick={AgeUp}>Inc Age</button>
        <button onClick={AgeDown}>Dec Age</button>

    </div>
  )
}

export default AgeCount