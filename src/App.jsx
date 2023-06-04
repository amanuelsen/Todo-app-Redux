import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoIthem from './components/Todo'
import { useSelector } from 'react-redux'
import { SelecTodolist } from './features/todoslice'

function App() {
  const toDolist=useSelector(SelecTodolist)

  
   return( 
    <div className='App'>
      <div className='app__container'>
        <h1>Todo App</h1>

      <div className='app__todoContainer'>
{
  toDolist.map((item)=> ( 
    <TodoIthem name={item.item} id={item.id} done={item.done}/>
  ))
}
      </div>
      <Input/> 
      </div>
    </div>
    
   
  )
}

export default App
