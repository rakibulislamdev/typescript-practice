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
        <form onSubmit={handleFormSubmit}>
            <input className="px-2" type="text" name="todo" placeholder="write Your Todo"
                value={todo}
                onChange={handleInputAddTodo}
            />
            <button type="submit">Add</button>
        </form>
    )
}
