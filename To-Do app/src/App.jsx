import { useState } from 'react';
import './Styles.css'

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, {id:crypto.randomUUID(), text: newItem, completed:false}]);
    setNewItem('')
  }

  function toggleTodo(id,completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todos, completed};
        }
      })
    })
  }

  function deleteToDo() {

  }


  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>Todo List</h1>

      <ul className="list">
        {todos.length > 0 ? (
          todos.map(todo => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.text}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No todos yet!</p> // Optional: Display a message when the list is empty
        )}
      </ul>
    </>
  );
}

export default App
