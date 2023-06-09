import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]

}

const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo:(state, action)=>{
        state.todoList.push(action.payload)
    },
    setCheck:(state, action)=> {
        state.todoList.map((item)=>{
            if(action.payload=== item.id){
                if(item.done === true){
                    item.done= false
                } else {
                    item.done=true

                }
            }
        })
    }
  }
});

export const {saveTodo, setCheck} = todoslice.actions
 export const SelecTodolist= state => state.todos.todoList
export default todoslice.reducer