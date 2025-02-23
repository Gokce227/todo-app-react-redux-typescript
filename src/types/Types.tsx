export interface TodoInitialState {
     todos : TodoType[], // icindeki todos bir array tipinde tum todoslari tutar
     
}

export interface TodoType{ // diardan gelebilecek her deger icin TodoType tipinde
     id : number,
     content : string,
     completed: boolean;
}

export interface ThemeState {
     isDarkMode: boolean;
}