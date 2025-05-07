// src/Todo.js
function Todo({ todo, toggleComplete }) {
    return (
      <div onClick={toggleComplete} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.text}
      </div>
    );
  }
  export default Todo;
  