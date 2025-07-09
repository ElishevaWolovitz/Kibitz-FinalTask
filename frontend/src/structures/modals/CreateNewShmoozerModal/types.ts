import type { ShmoozerType } from '../../../types/shmoozer.types';

export type CreateNewShmoozerModalProps = {
    onClose: () => void;
    createNewItem: (item: ShmoozerType) => void;
}