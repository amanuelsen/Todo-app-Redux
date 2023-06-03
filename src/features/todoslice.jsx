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
    }
  }
});

export const {saveTodo} = todoslice.actions
 
export default todoslice.reducer