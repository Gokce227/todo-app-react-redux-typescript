import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 
import { ThemeState, TodoInitialState, TodoType } from '../types/Types'

const initialState :TodoInitialState = {
  todos: [],
     
}

export const todoSlice = createSlice({
     name : 'todo',
     initialState,
     reducers:{
          createTodo : (state: TodoInitialState, action: PayloadAction<TodoType>) => {
               state.todos = [...state.todos, action.payload]; // her gelen todosa al ve action payloaddan gelen degeri koy
          },
          removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
               state.todos = [...state.todos.filter((todo: TodoType)=> todo.id !== action.payload)]
          },
          removeTodoAll: (state: TodoInitialState) => {
               state.todos = []; // tüm todo'ları sıfırlıyoruz
          },

     }
})



const initialThemeState:ThemeState = {
     isDarkMode: true,
}

const themeSlice = createSlice({
     name: 'theme',
     initialState: initialThemeState,
     reducers: {
          toggleTheme: (state) => {
               state.isDarkMode = !state.isDarkMode
          },
     },
})



export const { createTodo, removeTodoById , removeTodoAll} = todoSlice.actions
export const { toggleTheme } = themeSlice.actions

export const todoReducer = todoSlice.reducer;
export const themeReducer = themeSlice.reducer;