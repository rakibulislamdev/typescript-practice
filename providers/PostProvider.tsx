"use client"

import { Post } from "@/app/actions/getposts";
import { PostContext } from "@/context";
import React, { useState } from "react"


interface PostProviderProps {
    children: React.ReactNode;
    initialPosts: Post[];
}

export default function PostProvider({ children, initialPosts }: PostProviderProps) {

    const [posts, setPosts] = useState<Post[]>(initialPosts)

    return (
        <PostContext.Provider value={{ posts, setPosts }} >{children}</PostContext.Provider>
    )
}
