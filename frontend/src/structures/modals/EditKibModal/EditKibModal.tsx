import SubmitButton from '../../../components/Button/SubmitButton';
import { Styles } from './styles';
import type { EditKibModalProps } from './types';
import type { KibType } from '../../../types/kib.types'
import { useForm } from "react-hook-form";
import { emptyToUndefined, emptyToZeroOrNumber } from "../functions";
import CancelButton from '../../../components/Button/CancelButton';
import { onSubmit } from './functions';
import { useShmoozerName } from '../../../contexts/ShmoozerNameContext/ShmoozerNameContext';


const EditKibModal = (
    { _id, kibName, shmoozerId, text, media, 
    likes, createdAt, onClose, editItem}: 
    EditKibModalProps) => {
        const classes = Styles();
        const { shmoozerName } = useShmoozerName();
        const {
            register,
            handleSubmit,             
            formState: { errors } 
        } = useForm<KibType>({
            defaultValues: {
                kibName: kibName,
                shmoozerId: shmoozerId,
                text: text,
                media: media,
                likes: likes,
                createdAt: createdAt 
            }
        });

        return (
            <div className={classes.overlay}>
                <div className={classes.modalContent}>
                    <button className={classes.closeButton} onClick={onClose}>
                    ×
                    </button>
                    <div className={classes.header}>Edit {shmoozerName}'s Kib</div>
                    <form onSubmit={handleSubmit(onSubmit({onClose, editItem}))} className={classes.form}>
                        <div>
                            <input type="hidden" {...register("_id")} value={_id} />
                            <strong>ID:</strong> {_id}
                        </div>
                        <div>
                            <input type="hidden" {...register("shmoozerId")} value={shmoozerId} />
                            {errors.shmoozerId && <span>This field is required</span>}
                        </div>
                        <label className={classes.label}>
                            Kib Name:
                            <input 
                                className={classes.input}
                                type="text"
                                {...register("kibName", { required: true })}
                                placeholder="Kib Name"
                            />
                            {errors.kibName && <span>This field is required</span>}
                        </label>
                        <label className={classes.label}>
                            Text:
                            <textarea
                                className={classes.textarea}
                                {...register("text", { required: true })}
                                placeholder="Kib Text"
                            />
                            {errors.text && <span>This field is required</span>}
                        </label>
                        <label className={classes.label}>
                            Media:
                            <input
                                className={classes.input}
                                type="text"
                                {...register("media",
                                    {setValueAs: emptyToUndefined}
                                )}
                                placeholder="Media URL"
                            />
                        </label>
                        <div className={classes.footer}>
                            <div className={classes.likes}>
                                <label>
                                    Likes:
                                    <input
                                        className={classes.input}
                                        type="number"
                                        {...register("likes",
                                            {setValueAs: emptyToZeroOrNumber}
                                        )}
                                        placeholder="Number of Likes"
                                    />
                                </label>
                            </div>
                            <div className={classes.created}>
                                <label> 
                                    Created At:
                                    <input
                                        type="text"
                                        {...register("createdAt")}
                                        placeholder="Creation Date"
                                        disabled
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={classes.actions}>
                            <SubmitButton />
                            <CancelButton onClick={onClose}/>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export { EditKibModal };