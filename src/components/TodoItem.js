import React from 'react';
import { BiTrash } from 'react-icons/bi';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>
        <BiTrash/>
      </button>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
    </li>
  );
};

export default TodoItem;
