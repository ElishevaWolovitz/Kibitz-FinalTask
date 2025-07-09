import { Styles } from './styles';
import type { EditButtonProps } from "./types";

const EditButton = ({ onClick }: EditButtonProps) => {
  const classes = Styles();
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      Edit
    </button>
  )
};

export { EditButton };
