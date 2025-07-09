import { Styles } from './styles';
import type { DeleteButtonProps } from "./types";


const DeleteButton =({onClick}: DeleteButtonProps) => {
    const classes = Styles();
    return (
        <button type="button" className={classes.button} onClick={onClick}>
            Delete
        </button>
    )
}

export { DeleteButton }