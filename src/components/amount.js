import React from 'react'

const Amount=({onChange})=> {
  return (
    <div className="container">
        <input onChange={onChange} type='number' step='5' min='5' max='50'style={{width: '50px', borderRadius: '10px', color: 'blue'}}></input>
    </div>
  )
}
export default Amount