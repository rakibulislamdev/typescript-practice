import CardLists from "@/components/CardLists"
import { ModeToggle } from "@/components/ModeToggle"


export default function PostsPage() {
    return (

        <div className="max-w-7xl mx-auto px-2">
            <h2 className="text-center my-4 font-bold text-3xl">JSON Placeholder Data</h2>
            <ModeToggle />
            <CardLists />
        </div>

    )
}
