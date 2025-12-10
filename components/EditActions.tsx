"use client"

import { editPost, Post } from "@/app/actions/getposts";
import { usePostContext } from "@/hooks";
import React, { useState } from "react";


interface EditActionsProps {
    post: Post
}

export default function EditActions({ post }: EditActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { posts, setPosts } = usePostContext()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            e.stopPropagation()

            const formData = new FormData(e.currentTarget)
            const updatedPosts = await editPost(formData)

            const updated = posts.map(p => {
                if (p?.id === updatedPosts?.id) {
                    return {
                        ...p,
                        updatedPosts
                    }
                }
                return p
            })

            setPosts(updated)
            alert("Post updated successfully")
            setIsOpen(false)
        } catch (error) {
            console.log(error)
        }

    }

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation()
        setIsOpen(true)
    }


    return (
        <>

            <button
                onClick={handleEditClick}
                className="px-4 py-2 bg-amber-300 rounded-sm"
            >
                Edit
            </button>


            {isOpen && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center w-full h-full z-50">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg w-full max-w-md relative">
                        <button
                            onClick={() => { setIsOpen(false); }}
                            className="absolute top-2 right-2 text-red-500 font-bold"
                        >
                            X
                        </button>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <input type="hidden" name="postId" value={post?.id} />
                            <input
                                name="title"
                                defaultValue={post.title}
                                className="border p-1"
                                placeholder="Title"
                            />
                            <textarea
                                name="body"
                                defaultValue={post.body}
                                className="border p-1"
                                placeholder="Body"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-amber-300 rounded-sm mt-2"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
