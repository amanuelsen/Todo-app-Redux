import React, { useState } from 'react';
import './inout.css';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoslice';

function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') { 
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
      setInput("")
    } else {
    alert('Input is empty');
    }
  };

  return (
    <div className="input">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
}

export default Input;
