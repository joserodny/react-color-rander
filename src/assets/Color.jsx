import React from 'react'
import "./color.css"
function Color({hex, name}) {
  return (
    <div className='color-square' style={{ backgroundColor: hex }}>{name}</div>
  )
}

export default Color