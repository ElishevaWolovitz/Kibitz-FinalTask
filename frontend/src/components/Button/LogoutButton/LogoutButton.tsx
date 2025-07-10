import type { LogoutButtonProps } from "./types";

const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      Logout
    </button>
  )
};

export { LogoutButton };