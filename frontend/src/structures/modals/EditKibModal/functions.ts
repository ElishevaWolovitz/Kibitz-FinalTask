import type { OnSubmitFuncType } from "./types";
import type { KibType } from '../../../types/kib.types';

export const onSubmit = ({onClose, editItem}: OnSubmitFuncType) => (kib: KibType) => {
        editItem(kib);
        onClose();
};