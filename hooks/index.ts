import { PostContext } from "@/context"
import { useContext } from "react"


export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePostContext used outside of Provider');
    }
    return context
}