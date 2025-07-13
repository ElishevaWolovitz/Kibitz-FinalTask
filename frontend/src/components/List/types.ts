
export type ListProps<T> = {
  items: Array<T & { _id: string }>;
  ItemPrint: React.ComponentType<{item: T}>;
  checkLoggedInUserForPost?: (item: T) => boolean;
  editItem?: (item: T) => void;
  deleteItem?: (item: T) => void;
  EditItemModal?: React.ComponentType<T & { onClose: () => void } & { editItem: (item: T) => void }>;
};
