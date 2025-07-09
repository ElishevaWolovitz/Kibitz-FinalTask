import { Styles } from "./styles";
import type { PrintShmoozerProps } from "./types";

const PrintShmoozer = ({ item }: PrintShmoozerProps) => {
    const classes = Styles();
    return (
        <>
            <div className={classes.header}>
                <div className={classes.avatar} />
                <span className={classes.shmoozerName}>
                    {item.shmoozerName}
                </span>
                <span className={classes.displayName}>
                    {item.displayName}
                </span>
            </div>
            <span className={classes.id}>
                ID: {item._id}
            </span>
        </>
    )
}
export { PrintShmoozer };