'use server'

export interface Post{
    userId: number;
    id:number;
    title: string;
    body: string;
}

export async function getPosts():Promise<Post[]>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    if(!res.ok){
        throw new Error("Failed to fetch posts")
    }

    return res.json()
}



export async function getPostDetails(postId:number):Promise<Post>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    if(!res.ok){
        throw new Error("Failed to fetch post details")
    }

    return res.json()
}


export async function editPost(formData: FormData){
    const postId = formData.get("postId") as string
    const title = formData.get("title") as string
    const body = formData.get("body") as string

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            body
        })
    })

    if(!res.ok){
        throw new Error("Failed to edit post")
    }

    return res.json()

}

export async function deletePost(postId: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
    })

    if (!res.ok) {
        throw new Error("Failed to delete post")
    }

    return res.json()
}

