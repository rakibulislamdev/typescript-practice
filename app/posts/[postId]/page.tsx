import { getPostDetails } from "@/app/actions/getposts";
import Card from "@/components/Card";

interface PostPageProps {
    params: { postId: string }
}


export default async function PostDetailsPage({ params }: PostPageProps) {
    const { postId } = await params
    const post = await getPostDetails(postId)

    return (
        <div className="max-w-7xl mx-auto p-4">
            <Card post={post} />
        </div>
    )
}
