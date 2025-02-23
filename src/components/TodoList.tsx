import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { TodoType } from '../types/Types'
import { useDispatch } from 'react-redux';
import { DiVim } from 'react-icons/di';
import { removeTodoAll } from '../redux/todoSlice';



function TodoList() {

  const {todos } = useSelector((state:RootState)=> state.todo) 
  const isDarkMode = useSelector((state:RootState) => state.theme.isDarkMode);  // initalstatdeki stateimi yakaladim
  
  const dispatch = useDispatch(); 

  const [remainingCount, setRemainingCount] = useState(0);
  useEffect(() => { // 
    const count = todos.filter((todo: TodoType) => !todo.completed).length;
    setRemainingCount(count);
  }, [todos]); // `todos` değiştiğinde yeniden hesapla
  

const[active, setActive] = useState<boolean>(false)

  const handleRemoveTodoAll = () =>{
  dispatch(removeTodoAll())
}


  return (
    <div>
      <div className='todo-list'>
        {todos.length === 0 ? (
          <div className={`todo ${isDarkMode ? 'light' : 'dark'}`}>Bir şey eklemediniz...</div>
        ) : (
          todos.map((todo: TodoType) => (
            <Todo key={todo.id} todoProps={todo} />
          ))
        )}
        
        
      </div>
      <div className={`button-all ${isDarkMode ? 'light' : 'dark'}`}>
        <div className='item-text'> {remainingCount} item left</div>
        <div className='btn'>
          <button className='btna' onClick={() => { setActive(false) }}>All</button>
        </div>
        <div>
          <button className='btna' onClick={handleRemoveTodoAll}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default TodoList
