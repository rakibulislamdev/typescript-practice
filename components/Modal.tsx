"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation";

interface ModalProps {
    title?: string;
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}



export default function Modal({ title, children, open = true, onOpenChange }: ModalProps) {

    const router = useRouter()

    const handleOpenChange = (isOpen: boolean) => {
        if (onOpenChange) {
            onOpenChange(isOpen)
        } else {
            if (!isOpen) {
                router.back()
            }
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription asChild>
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
