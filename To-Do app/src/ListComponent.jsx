import React from 'react'
import ListItems from './ListItems';

function ListComponent({ todos, deleteToDo, toggleTodo }) {
    console.log(todos);
    return (
        <ul className="list">
            {todos?.length > 0 ? (
                todos.map((todo) => (
                    <ListItems key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
                ))
            ) : (
                <p>No todos yet!</p> // Optional: Display a message when the list is empty
            )}
        </ul>
    );
}

export default ListComponent