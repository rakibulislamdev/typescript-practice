"use client"

import { useTodos } from "@/store/Todos"
import { useSearchParams } from "next/navigation";

export default function Todos() {
    const { todos, toggleTodoCompleted, handleDeleteTodo } = useTodos()
    const searchParams = useSearchParams()
    const todosTab = searchParams.get("todos")

    let filteredTodos = todos;
    console.log(filteredTodos)

    if (todosTab === "active") filteredTodos = todos.filter(todo => !todo.completed)
    if (todosTab === "completed") filteredTodos = todos.filter(todo => todo.completed)


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
