import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import Todo from '../Todo';
import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Todos() {

    const [todos, setTodos] = useState([])

    const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
    

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete;
        setTodos(newTodos)
    }

    function handleAddTodo(event) {
        const name = todoNameRef.current.value
        if (name === '') return;

        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name, complete:false }]
        })

        todoNameRef.current.value = null
    }

    function handleClearTodos() {
        const notCompletedTodos = todos.filter(todo => !todo.complete);

        setTodos(notCompletedTodos)
    }


    return (
        <>
        <main>
            <input
                type="text"
                placeholder="Type a new todo..."
                ref={todoNameRef}
            />
            <button
                className="add-todo"
                onClick={handleAddTodo}
            >
                Add
            </button>
        </main>
        <main>
            <ul>
                {
                    todos.map(todo => {
                        return <Todo
                                    key={todo.id}
                                    toggleTodo={toggleTodo}
                                    todo={todo}
                                />
                    })
                }
            </ul>
            
            <p>
                {todos.filter(todo => !todo.complete).length} left to do
            </p>

            <button className="clear-todos" onClick={handleClearTodos}>Clear completed</button>

        </main>
        </>
    );
}

export default Todos;
