import type { CreateNewKibModalProps } from "./types";
import type { KibType } from "../../../types/kib.types";

export const onSubmit = ({onClose, createNewItem}: CreateNewKibModalProps) => (kib: KibType) => {
    createNewItem(kib);
    onClose(); 
};