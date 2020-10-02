import React, { ReactDOM } from 'react';
import './style.css';

function Todo({ toggleTodo, deleteTodo, saveNewTodo, todo }) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    function handleDeleteTodo() {
        deleteTodo(todo.id)
    }

    function handleSaveNewTodo() {
        saveNewTodo(todo.id, ReactDOM.findDOMNode('li').innerHTML)
    }

    return (
        <div className="todo">
            <li contentEditable onInput={handleSaveNewTodo}>
                <label>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                    
                    {todo.name}

                    <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828843.svg" alt="Delete Icon" onClick={handleDeleteTodo}>

                    </img>
                </label>
            </li>
        </div>
    );
}

export default Todo;