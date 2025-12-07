"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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
    toggleTodoCompleted: (todoId: string) => void
    handleDeleteTodo: (todoId: string) => void
}


export const TodoContext = createContext<TodosContext | null>(null)



export const TodosProvider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<Todos[]>(() => {
        const storedTodos = localStorage.getItem("todos")
        return storedTodos ? JSON.parse(storedTodos) : []
    })




    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])



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


    const toggleTodoCompleted = (todoId: string) => {
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    completed: !todo.completed,
                    updatedAt: new Date()
                }
            }

            return todo
        })

        setTodos(newTodos)
    }


    const handleDeleteTodo = (todoId: string) => {
        const filteredTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(filteredTodos)
    }

    return (
        <TodoContext.Provider value={{ todos, handleAddTodo, toggleTodoCompleted, handleDeleteTodo }}>
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



