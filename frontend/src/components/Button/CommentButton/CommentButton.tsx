//import { Styles } from './styles';
import type { CommentButtonProps } from "./types";

const CommentButton = ({ onClick }: CommentButtonProps) => {
    return (
        <button type="button" onClick={onClick}>💬</button>
    )
}

export { CommentButton };