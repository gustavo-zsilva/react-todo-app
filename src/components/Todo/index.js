import React from 'react';
import './style.css';

function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div className="todo">
            <li>
                <label>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                    
                    {todo.name}
                </label>
            </li>
        </div>
    );
}

export default Todo;