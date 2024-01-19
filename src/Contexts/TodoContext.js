import {createContext, useContext} from 'react'

const TodoContext = createContext({
    todoList: [],
    addTodo : (todo) => {},
    updateTodo : (id, content) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
})

export const TodoContextProvider = TodoContext.Provider;
export const useTodo = () => {
    return useContext(TodoContext);
} 