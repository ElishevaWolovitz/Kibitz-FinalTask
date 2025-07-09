import { Styles } from "./styles";
import type { PrintKibProps } from "./types";


const PrintKib = ({ item }: PrintKibProps) => {
    const classes = Styles();
    return (
        <>
        <div className={classes.header}>
            <span className={classes.kibName}>{item.kibName}</span>
            <span className={classes.shmoozerId}>
                @shmoozer
            {item.shmoozerId}</span>
        </div>
        <div className={classes.text}>{item.text}</div>
        {item.media && (
            <a href={item.media} target="_blank" rel="noopener noreferrer">
                {item.media}
            </a>
        )}
        <div className={classes.footer}>
            <span className={classes.likes}>👍 {item.likes}</span>
            {item.createdAt && 
                (<span className={classes.created}> 
                    created:{item.createdAt.toString()} 
                </span>)
            }
        </div>
        <span className={classes.id}>Kib ID: {item._id}</span>
        </>
    )
}
export { PrintKib };