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



export async function getPostDetails(postId:string):Promise<Post>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    if(!res.ok){
        throw new Error("Failed to fetch post details")
    }

    return res.json()
}

