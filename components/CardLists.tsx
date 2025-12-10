import { Post } from "@/app/actions/getposts";
import Card from "./Card";

interface CardListsProps {
    posts: Post[]
}

export default function CardLists({ posts }: CardListsProps) {
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
