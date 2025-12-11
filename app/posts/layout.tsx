import PostProvider from "@/providers/PostProvider"
import { getPosts } from "../actions/getposts"

export default async function PostsLayout({
    children, modal
}: {
    children: React.ReactNode
    modal: React.ReactNode
}) {
    const posts = await getPosts()

    return (
        <PostProvider initialPosts={posts}>
            {children}
            {modal}
        </PostProvider>
    )
}