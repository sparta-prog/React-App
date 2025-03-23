import React from 'react'

function ListItems({ todo, toggleTodo, deleteToDo }) {
  return (
      <li>
          <label>
              <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.text}
          </label>
          <button
              className="btn btn-danger"
              onClick={() => deleteToDo(todo.id)}
          >
              Delete
          </button>
      </li>
  )
}

export default ListItems