"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function NavBar() {

    const searchParams = useSearchParams()
    const todosTab = searchParams.get("todos")
    console.log(todosTab)

    return (
        <nav className="flex gap-4">
            <Link href="/" className={todosTab === null ? "border-b-2 border-green-400" : ""}>All</Link>
            <Link href="/?todos=active" className={todosTab === "active" ? "border-b-2 border-green-400" : ""}>Active</Link>
            <Link href="/?todos=completed" className={todosTab === "completed" ? "border-b-2 border-green-400" : ""}>Completed</Link>
        </nav>
    )
}
