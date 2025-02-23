import { configureStore } from '@reduxjs/toolkit'
import {todoReducer,themeReducer }from  './todoSlice';  // slicesimizi store baglamak icin import ettik


export const store = configureStore({
     reducer: { // todo yerine istedimiz ismi verebiliriz
          todo: todoReducer,
          theme: themeReducer
     },
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch