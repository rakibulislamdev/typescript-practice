"use client"
import Card from "./Card";
import { usePostContext } from "@/hooks";

export default function CardLists() {
    const { posts } = usePostContext()

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                posts.map(post => (
                    <Card key={post.id} post={post} />
                ))
            }
        </div>
    )
}
