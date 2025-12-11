import CardLists from "@/components/CardLists"
import { getPosts, Post } from "../actions/getposts"
import PostProvider from "@/providers/PostProvider"
import { ModeToggle } from "@/components/ModeToggle"


export default async function PostsPage() {

    const posts: Post[] = await getPosts()

    return (
        <PostProvider initialPosts={posts}>
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="text-center my-4 font-bold text-3xl">JSON Placeholder Data</h2>
                <ModeToggle />
                <CardLists />
            </div>
        </PostProvider>
    )
}
