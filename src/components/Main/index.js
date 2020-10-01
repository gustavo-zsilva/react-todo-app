import React from 'react';
import './style.css';
import Todo from '../Todo';

function Todos() {
    return (
        <>
        <main>
            <input
                type="text"
                placeholder="Type a new todo..."
            />
            <button
                className="add-todo"
            >
                    Add
            </button>
        </main>
        <main>
            <ul>
                <Todo todo={'Todo Teste 1'} />
                <Todo todo={'Todo Teste 2'} />
                <Todo todo={'Todo Teste 3'} />
            </ul>
            <button className="clear-todos">Clear all completed to-dos</button>
        </main>
        </>
    );
}

export default Todos;
