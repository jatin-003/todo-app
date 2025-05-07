// src/TodoList.js
import Todo from './Todo';
function TodoList({ todos, toggleComplete }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} toggleComplete={() => toggleComplete(index)} />
      ))}
    </div>
  );
}
export default TodoList;
