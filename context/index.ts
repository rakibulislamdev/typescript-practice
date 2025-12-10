"use client"

import { Post } from "@/app/actions/getposts";
import React, { createContext } from "react";

interface PostContextType {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostContext = createContext<PostContextType | null>(null)