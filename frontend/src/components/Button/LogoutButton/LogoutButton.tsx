import type { LogoutButtonProps } from "./types";
import { Styles } from "./styles";

const LogoutButton = ({ onClick }: LogoutButtonProps) => {
    const classes = Styles();
    return (
    <button type="button" className={classes.button} onClick={onClick}>
      Logout
    </button>
  )
};

export { LogoutButton };