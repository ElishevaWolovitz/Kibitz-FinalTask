import { useState, useEffect } from "react"; 
import type { SearchBarProps } from "./types";
import { Styles } from './styles';



const SearchBar =<T extends object>({items, filterItems, setFilteredItems}: SearchBarProps<T>) => {
    const [query, setQuery] = useState('');
    const classes = Styles(); 
    const filteredItems = filterItems(items, query); 
    useEffect(() => {
        setFilteredItems(filteredItems);
    }, [filteredItems, setFilteredItems]);
    const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    return (
        <div className={classes.searchBarContainer}>
            <span className={classes.icon}>🔍</span>
            <input
                className={classes.input}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSetQuery}
            />
        </div>
    )
}

export { SearchBar }
