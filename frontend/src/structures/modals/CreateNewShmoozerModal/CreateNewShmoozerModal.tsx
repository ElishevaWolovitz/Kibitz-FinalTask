import type { CreateNewShmoozerModalProps } from "./types"
import { useForm } from "react-hook-form"
import type { ShmoozerType } from '../../../types/shmoozer.types';
import SubmitButton from "../../../components/Button/SubmitButton";
import CancelButton from '../../../components/Button/CancelButton';
import { Styles } from './styles';
import { onSubmit } from './functions';

const CreateNewShmoozerModal =({onClose, createNewItem}: CreateNewShmoozerModalProps) => {
    const classes = Styles();
    const {
            register,
            handleSubmit,             
            formState: { errors } 
        } = useForm<ShmoozerType>();
    
    return (
            <div className={classes.modalOverlay}>
                <div className={classes.modalContent}>
                    <button className={classes.closeButton} onClick={onClose}>
                    ×
                    </button>
                    <div className={classes.header}>Create New Shmoozer</div>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit({onClose, createNewItem}))}>
                        <label className={classes.label}>
                            Shmoozer Name:
                            <input
                                className={classes.input}
                                type="text"
                                {...register("shmoozerName", { required: true })}
                                placeholder="Shmoozer Name"
                            />
                            {errors.shmoozerName && <span className={classes.error}>This field is required</span>}
                        </label>
                        <label className={classes.label}>
                            Display Name:
                            <input
                                className={classes.input}
                                type="text"
                                {...register("displayName", { required: true })}
                                placeholder="Display Name"
                            />
                            {errors.displayName && <span className={classes.error}>This field is required</span>}
                        </label>
                        <div className={classes.actions}>
                            <SubmitButton />
                            <CancelButton onClick={onClose}/>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export { CreateNewShmoozerModal }
