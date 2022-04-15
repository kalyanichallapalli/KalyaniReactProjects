import React from 'react'
import NornalComp from './NornalComp'

const HigherOrderComp = (NornalComp) => {
  return (
        class extends React.Component(){
            render(){
                return(
                    <div>
                        <NornalComp/>
                    </div>
                )
            }
        }
      )
}

export default HigherOrderComp(NornalComp)