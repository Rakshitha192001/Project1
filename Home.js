import React from 'react'
import { Link } from 'react-router-dom'
 export const Home = () => {
  return (
    <>
    <h2>Timer and Counter</h2>
    <button><Link to='/Timer1' >Counter</Link></button>
    <button><Link to='/HookCounter' >Timer</Link></button>
    </>
  )
}
