import { getPostDetails } from "@/app/actions/getposts";
import Modal from "@/components/Modal";

interface PostModalPageProps {
    params: { postId: number };
}

export default async function PostModalPage({ params }: PostModalPageProps) {
    const { postId } = await params;
    const post = await getPostDetails(postId);

    return (
        <Modal title={post.title} open={true}>
            <p>{post.body}</p>
        </Modal>
    );
}
