import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Link to="/circles">Circles</Link>
      <Link to="/memory">Memory Game</Link>
    </div>
  )
}

export default About