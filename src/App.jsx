import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './Contexts/ToDoContext'
import Form from './Components/Form/Form';
import Show from './Components/Show/Show';

// structure of todo
// {id: Number, content: String, checked: Boolean}

function App() {
  // states to handle
  const [todoList, setToList] = useState([]);

  // array functions
  const addTodo = (newTodo) => {
    setToList((prev) => [newTodo, ...prev]);
  }
  const updateTodo = (id, updatedTodo) => {
    setToList((prev) => {
      prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo));
    });
  }
  const deleteTodo = (id) => {
    setToList((prev) => (prev.filter((todo) => todo.id !== id)));
  }
  const toggleTodo = (id) => {
    setToList((prevTodos) => {
        // Find the index of the todo that was toggled
        const todoIndex = prevTodos.findIndex(todo => todo.id === id);
        // Make a copy of the current todos array
        const newTodos = [...prevTodos];
        // Modify the 'completed' property of the toggled todo
        newTodos[todoIndex] = {
            ...newTodos[todoIndex],
            checked: !newTodos[todoIndex].checked
        };
        // If the todo was just marked as completed, move it to the end
        if (newTodos[todoIndex].checked) {
            const [completedTodo] = newTodos.splice(todoIndex, 1);
            newTodos.push(completedTodo);
        }
        // Return the new todos array
        return newTodos;
    });
};

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos){
      setToList(todos);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList])


  // returning
  return (
    <TodoContextProvider  value={{todoList, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="page">
        <div className="formContainer">
          <Form />
        </div>
        <div className="showContainer">
          <Show />
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
