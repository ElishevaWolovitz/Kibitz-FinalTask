import type { KibType } from '../../../types/kib.types';

export type EditKibModalProps = KibType & { 
    onClose: () => void;
    editItem: (item: KibType) => void;
}

export type OnSubmitFuncType = {
    onClose: () => void; 
    editItem: (item: KibType) => void;
}
