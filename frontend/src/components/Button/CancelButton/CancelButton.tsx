import { Styles } from './styles';
import type { CancelButtonProps } from "./types";

const CancelButton = ({ onClick }: CancelButtonProps) => {
    const classes = Styles();
    return (
        <button type="button" onClick={onClick} className={classes.button}>
            Cancel
        </button>
    )
}

export { CancelButton };