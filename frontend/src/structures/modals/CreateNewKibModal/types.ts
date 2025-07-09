import type { KibType } from '../../../types/kib.types'

export type CreateNewKibModalProps = {
    onClose: () => void;
    createNewItem: (item: KibType) => void;
}