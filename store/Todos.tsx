"use client"
import { createContext, ReactNode, useContext, useState } from "react";

export type Todos = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date
}


export type TodosContext = {
    todos: Todos[];
    handleAddTodo: (task: string) => void
}


export const TodoContext = createContext<TodosContext | null>(null)



export const TodosProvider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<Todos[]>([])

    const handleAddTodo = (task: string) => {
        const newTodos: Todos = {
            id: crypto.randomUUID(),
            task,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        setTodos((prev) => [
            ...prev,
            newTodos
        ])
    }

    return (
        <TodoContext.Provider value={{ todos, handleAddTodo }}>
            {children}
        </TodoContext.Provider>
    )

}


// context api

export function useTodos() {
    const todosContextValue = useContext(TodoContext)
    if (!todosContextValue) {
        throw new Error('useTodos used outside of Provider')
    }
    return todosContextValue
}