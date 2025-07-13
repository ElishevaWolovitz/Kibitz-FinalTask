
export type CardProps<T> = {
    item: T;
    ItemPrint: React.ComponentType<{item: T}>;
    checkLoggedInUserForPost?: (item: T) => boolean;
    editItem?: (item: T) => void;
    deleteItem?: (item: T) => void;
    EditItemModal?: React.ComponentType<T & { onClose: () => void } & { editItem: (item: T) => void }>;
}
