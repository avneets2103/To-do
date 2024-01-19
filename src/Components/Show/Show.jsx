import React from 'react';
import './Show.css';
import { useTodo } from '../../Contexts/ToDoContext';
import TodoElement from '../TodoElement/TodoElement';

function Show() {
    const { todoList } = useTodo();
    return (
        <>
        <div className='inner'>
            {todoList.map((currentTodo)=>(
                <div key={currentTodo.id}><TodoElement todo={currentTodo}/></div>
            ))}
        </div>
        </>
    );
}

export default Show;