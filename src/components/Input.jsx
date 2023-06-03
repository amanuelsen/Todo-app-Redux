import React, { useState } from 'react'
import "./inout.css"
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoslice'
const dispath=useDispatch()

function Input() {
  const [input, setinput]=useState("")
  const addtodo=()=> {
    console.log(`adding ${input}`)

  }
  return (
    <div className='input'>
      <input type="text" value={input} onChange={(e)=> setinput(e.target.value)}/>
      <button onClick={addtodo}>Add!</button>
    </div>
  )
}

export default Input
