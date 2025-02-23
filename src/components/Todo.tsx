import React, { useState } from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { GiCircle } from 'react-icons/gi';
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';
import { useSelector } from 'react-redux'
//import { ImGift } from 'react-icons/im';
//import { DiVim } from 'react-icons/di';


interface TodoProps{
  todoProps: TodoType
}

function Todo({todoProps}: TodoProps) {

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);  // initalstatdeki stateimi yakaladim
  
  const{id, content} = todoProps;

  const dispatch = useDispatch(); 

  //const[editable, setEditable] = useState<boolean>(false); 
  const[check, setCheck] = useState<boolean>(false);

  //const[newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))   
  }
  

  

  return (
  
    <div>
      <div className={`todo ${isDarkMode ? 'light' : 'dark'}`}>
        <div className='todo-text'>
          
          {
            check ? (
              <>
                <img onClick={() => setCheck(false)} src="src/assets/images/icon-check.svg" className="icon-check" />
                <div className="todo-content"><s>{content}</s></div>
              </>
              
            ) : (
              <>
                <GiCircle onClick={() => setCheck(true)} />
                <div className="todo-content">{content}</div>
              </>
            )
          }


        </div>
        <div>
          <HiOutlineXMark onClick={handleRemoveTodo} className='icon-x' />
          {/*check ? <CiEdit onClick={() => setEditable(true)} className='icon-edit' style={{ display: "none" }} /> : <CiEdit onClick={() => setEditable(true)} className='icon-edit' />*/}
        </div>
      </div>
    </div>
   
  )
}

export default Todo
