import type { CreateNewShmoozerModalProps } from "./types";
import type { ShmoozerType } from "../../../types/shmoozer.types";

export const onSubmit = ({onClose, createNewItem}: CreateNewShmoozerModalProps) => (newShmoozer: ShmoozerType) => {
        console.log("Submitting new shmoozer:", newShmoozer);
        createNewItem(newShmoozer);
        onClose();
    };