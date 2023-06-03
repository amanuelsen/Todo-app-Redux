import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoIthem from './components/Todo'

const todoList= [{
  item:"spela",
      done:"true",
      id:12345
},
{
  item:"spela3",
      done:"false",
      id:123456
}]
function App() {
  
   return( 
    <div className='App'>
      <div className='app__container'>

      <div className='app__todoContainer'>
{
  todoList.map((item)=> ( 
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
