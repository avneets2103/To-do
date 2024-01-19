import { useState } from 'react';
import './TodoElement.css'
import { useTodo } from '../../Contexts/ToDoContext';

function TodoElement(props) {
    const currentTodo = props.todo;
    const {updateToDo, deleteTodo, toggleTodo} = useTodo();

    const [todoMsg, setToDoMsg] = useState(currentTodo.content);

    const editTodo = () =>{
        updateToDo(currentTodo.id, {...currentTodo, content: todoMsg});
    }
    const toggleComplete = () => {
        toggleTodo(currentTodo.id)
    }

    return (
        <>
            <div className={`pointer ${currentTodo.checked?'checked ordering':''}`}>
                <input type="checkbox" name="done" id="" checked={currentTodo.checked} onChange={toggleComplete}/>
                <input type="text" className={`pointerText ${currentTodo.checked?'checked':''}`} value={todoMsg} onChange={(e)=>{setToDoMsg(e.target.value); editTodo()}} readOnly={currentTodo.checked}/>
                <img src="../../../public/delete.png" alt="" onClick={()=>deleteTodo(currentTodo.id)}/>
            </div>
        </>
    )
}

export default TodoElement
