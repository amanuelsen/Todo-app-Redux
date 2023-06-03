import React from 'react'
import "./TodoItem.css"
import { Checkbox } from '@mui/material'

function TodoIthem({name, done, id}) {
    const handleCheck=()=>{

    }
  return (
    <div className='todoIthem'>
       <Checkbox checked={done} color='primary' onChange={handleCheck} 
       />
        
        <p className={done && "todoItem--done"}>{name}</p>
       

      
    </div>
  )
}

export default TodoIthem
