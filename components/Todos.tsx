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
        <ul className="mt-4 space-y-3 text-left">
            {filteredTodos.map(todo => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between p-3 rounded-md shadow-sm"
                >
                    <div className="flex items-center gap-3">
                        <input
                            onChange={() => toggleTodoCompleted(todo.id)}
                            type="checkbox"
                            checked={todo.completed}
                            className="w-5 h-5 rounded focus:ring-0  transition"
                        />
                        <span className={`text-gray-800 ${todo.completed ? "line-through text-gray-400" : ""}`}>
                            {todo.task}
                        </span>
                    </div>
                    {todo.completed && (
                        <button
                            type="button"
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="ml-3 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                    )}
                </li>
            ))}
        </ul>
    )
}
