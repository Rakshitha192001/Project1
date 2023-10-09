import React from 'react'
import { useState } from 'react'
function Hookcounter() {
  const [count,setCount]=useState(0)
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>increment</button>
    
    <button onClick={()=>setCount(count-2)}>decrement</button>
    </>
  )
}
export default Hookcounter