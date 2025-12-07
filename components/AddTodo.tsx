"use client"

import { useTodos } from "@/store/Todos"
import { ChangeEvent, FormEvent, useState } from "react"


export default function AddTodo() {

    const [todo, setTodo] = useState("")
    const { handleAddTodo } = useTodos()

    const handleInputAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (todo.trim().length === 0) return;

        handleAddTodo(todo)
        setTodo("")
    }

    return (
        <form className="flex gap-2" onSubmit={handleFormSubmit}>
            <input className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-colors" type="text" name="todo" placeholder="Write your todo.."
                value={todo}
                onChange={handleInputAddTodo}
            />
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors cursor-pointer" type="submit">Add</button>
        </form>
    )
}
