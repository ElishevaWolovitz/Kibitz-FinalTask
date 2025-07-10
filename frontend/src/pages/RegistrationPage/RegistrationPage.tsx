import { useForm } from "react-hook-form"
import type { ShmoozerType } from '../../types/shmoozer.types';
import SubmitButton from "../../components/Button/SubmitButton";
import CancelButton from '../../components/Button/CancelButton';
import { Styles } from './styles';
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from '../../consts'
import { onSubmit, onCancel } from './functions';
import { useNavigate } from "react-router-dom";
import { partial } from 'lodash/fp';
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";

const RegistrationPage =( ) => {
    const classes = Styles();
    const navigate = useNavigate();
    const { login } = useShmoozerName();
    const {
            register,
            handleSubmit,             
            formState: { errors } 
        } = useForm<ShmoozerType>();
    
    return (
        <>
            <ToastContainer autoClose={toastifyTimer}/>
            <div className={classes.modalOverlay}>
                <div className={classes.modalContent}>
                    <div className={classes.header}>Create New Shmoozer</div>
                    <form className={classes.form} onSubmit={handleSubmit(partial(onSubmit, [login, navigate]))}>
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
                            <CancelButton onClick={partial(onCancel, [navigate])}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export { RegistrationPage }
