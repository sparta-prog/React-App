import { useEffect, useState } from 'react';
import './Styles.css'
import FileComponent from './FileComponent';
import ListComponent from './ListComponent';

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function toDoList(title) {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: title, completed: false },
    ]);
  }
  console.log(todos);
  function deleteToDo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id, completed) {
    //write logic for toggling the todo item
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }
  return (
    <>
      <FileComponent displayList={toDoList} />
      <ListComponent todos={todos} deleteToDo={deleteToDo} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App
