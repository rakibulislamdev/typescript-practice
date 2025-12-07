"use client"

import { useTodos } from "@/store/Todos"

export default function Todos() {
    const { todos, toggleTodoCompleted, handleDeleteTodo } = useTodos()

    const filteredTodos = todos;
    console.log(filteredTodos)




    return (
        <ul>
            {
                filteredTodos.map(todo => (
                    <li key={todo.id}>

                        <input onChange={() => toggleTodoCompleted(todo.id)} type="checkbox" name="" id="" checked={todo.completed} />

                        <label htmlFor={todo.id}>
                            {todo.task}
                        </label>
                        {
                            todo.completed && (
                                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            )
                        }

                    </li>
                ))
            }
        </ul>
    )
}
