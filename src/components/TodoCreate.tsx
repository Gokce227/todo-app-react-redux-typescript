import React, { useState } from 'react'
import { GiCircle } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';
import { MdNightlightRound } from "react-icons/md";
import { toggleTheme } from '../redux/todoSlice';
import {filter} from '../redux/todoSlice'
import { setFilterText} from "../redux/todoSlice";

function TodoCreate() {

  const dispatch = useDispatch();

  const[newTodo, setNewTodo] = useState<string>('');
  const isDarkMode = useSelector((state:RootState) => state.theme.isDarkMode);

  const changeTheme = () => {
    // Tema değiştirme action'ını dispatch ediyoruz
    const body = document.querySelector("body")!;
    if (isDarkMode) {
      body.style.backgroundColor = "black";
      body.style.color = "#fff";
     
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "black";
     
    }
    //setTheme(!isDarkMode);
    dispatch(toggleTheme());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value); // Yeni değeri state'e kaydet

  };


  const handleCreateTodo = ()=>{
    if(newTodo.trim().length==0){
      alert("Todo Giriniz")
      return;
  }
  
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo
    }

    dispatch(createTodo(payload))
    setNewTodo('');

  } // end createTood




  return (

    <div>
          <div className="header">
               <h1>TODO</h1>
            {isDarkMode ? <MdNightlightRound onClick={changeTheme} className='moon' /> : <CiLight onClick={changeTheme}  className='cilight'/> }
                
          </div>
          <div className={`todo-create ${isDarkMode ? 'light' : 'dark'}`}>
                 <GiCircle className='circle' />
                 <input 
                 value={newTodo}
                  onChange={handleInputChange}
                 placeholder='Todo Giriniz...' className="todo-input" type="text" />
            </div>
      <button onClick={handleCreateTodo} className={`todo-create-button ${isDarkMode ? 'light' : 'dark'}`}>Ekle</button>
    </div>
  )
}

export default TodoCreate




