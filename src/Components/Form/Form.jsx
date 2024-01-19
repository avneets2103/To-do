import React, { useState } from 'react'
import { useTodo } from '../../Contexts/ToDoContext';
import './Form.css'

function Form() {
    const [input, setInput] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!input) return;
        addTodo({id: Date.now(), content: input, checked: false});
        setInput("");
    }
    return (
        <>
        <form onSubmit={add}>
            <input type="text"  className="enterTodo p-3" placeholder="What's next?" value={input} onChange={(e)=>{setInput(e.target.value);}}/>
            <button type="submit" className='submitButton bg-orange-500'>
            Done</button>
        </form>
        </>
    )
}

export default Form