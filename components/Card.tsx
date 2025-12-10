import { Post } from "@/app/actions/getposts"
import Link from "next/link"
import EditActions from "./EditActions"
import DeleteActions from "./DeleteActions"


interface CardProps {
    post: Post;
}

export default function Card({ post }: CardProps) {
    return (

        <div className="md:min-w-[60%] dark:bg-slate-800 w-full md:max-w-[75%] bg-white boxShadow rounded-xl z-0">
            <Link href={`posts/${post.id}`}>
                <div className="p-5">
                    <h1 className="text-[1.3rem] font-bold dark:text-[#abc2d3]">{post.title}</h1>
                    <span
                        className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-400">{post.id}</span>

                    <p className="text-gray-600 dark:text-[#abc2d3] mt-3">{post.body}</p>
                </div>
            </Link>

            <EditActions post={post} />
            <DeleteActions postId={post?.id} />
        </div>


    )
}
