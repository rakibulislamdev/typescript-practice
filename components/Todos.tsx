"use client"

import { useTodos } from "@/store/Todos"

export default function Todos() {
    const { todos } = useTodos()

    const filteredTodos = todos;
    console.log(filteredTodos)
    return (
        <ul>
            {
                filteredTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.task}
                    </li>
                ))
            }
        </ul>
    )
}
