'use client'

import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal = ({title,description,isOpen, onClose,children}  : ModalProps) => {
    const onChange = (open: boolean) => {
        if(!open) {
            onClose()
        }
    } 
    
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default Modal;