import React from 'react';
import './style.css';

function Todo({ todo }) {
    return (
        <div className="todo">
            <li>
                {todo}
            </li>
        </div>
    );
}

export default Todo;