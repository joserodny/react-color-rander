import React from 'react'
import Color from './Color.jsx'

const colors = [
    {
    hex: '#547445',
    name: 'color1'
    },
    {
    hex: '#345346',
    name: 'color2'
    },
    {
    hex: '#547885',
    name: 'color3'
    },
    {
    hex: '#678674',
    name: 'color4'
    }
]

function ColorRender() {
  return (
    <div>
    {colors.map(color => <Color key={color.hex} hex={color.hex} name={color.name} />)}
    </div>
  )
}

export default ColorRender