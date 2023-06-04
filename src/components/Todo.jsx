import React from 'react'
import "./TodoItem.css"
import { Checkbox } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setCheck } from '../features/todoslice'

function TodoIthem({name, done, id}) {
    const dispatch= useDispatch()
    const handleCheck=()=>{
dispatch(setCheck(id))
    }
  return (
    <div className='todoIthem'>
       <Checkbox checked={!done} color='primary' onChange={handleCheck} inputProps={{"aria-label": "secondary checkbox"}}
       />
        
        <p className={!done  && "todoItem--done"}>{name}</p>
       

      
    </div>
  )
}

export default TodoIthem
