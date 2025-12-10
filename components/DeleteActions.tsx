"use client"

import { deletePost } from "@/app/actions/getposts";
import { usePostContext } from "@/hooks";


interface DeleteActionsProps {
    postId: number;
}

export default function DeleteActions({ postId }: DeleteActionsProps) {

    const { posts, setPosts } = usePostContext()

    const handlePostDelete = async (postId: number) => {
        await deletePost(postId)
        const filtered = posts.filter(post => post?.id !== postId)
        setPosts(filtered)
    }

    return (
        <button
            onClick={() => handlePostDelete(postId)}
            className="px-4 py-2 bg-amber-300 rounded-sm"
        >
            Delete
        </button>
    )
}
