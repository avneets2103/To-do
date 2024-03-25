import {createContext, useContext} from 'react'

const TodoContext = createContext({
    todoList: [],
    addTodo : (todo) => {},
    updateTodo : (id, content) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
})

const TodoContextProvider = TodoContext.Provider;
export {TodoContextProvider};
export const useTodo = () => {
    return useContext(TodoContext);
} 