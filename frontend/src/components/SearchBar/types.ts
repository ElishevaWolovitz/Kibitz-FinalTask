

export type SearchBarProps<T> = {
    items: T[];
    filterItems: (items: T[], query: string) => Array<T & { _id: string }>;
    setFilteredItems: React.Dispatch<React.SetStateAction<T[]>>
}