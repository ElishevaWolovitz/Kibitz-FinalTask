import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";
import type { LoginPageFormType } from "./types";
import { Styles } from "./styles";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from "../../consts";
import {partial } from 'lodash/fp';
import { handleRegister, onSubmit } from './functions';

const LoginPage = () => {
  const classes = Styles();
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<LoginPageFormType>();
  const { login } = useShmoozerName();
  const navigate = useNavigate();
  return (
    <>
        <ToastContainer autoClose={toastifyTimer}/>
        <div className={classes.pageContainer}>
          <div className={classes.card}>
            <h2 className={classes.title}>Login to Kibitz</h2>
            <form onSubmit={handleSubmit(onSubmit(navigate, login, reset))} className={classes.form}>
                <input
                className={classes.input}
                type="text"
                placeholder="Enter your shmoozer name"
                {...register("shmoozerName", { required: "Shmoozer name is required" })}
                />
                {errors.shmoozerName && (
                <p className={classes.error}>{errors.shmoozerName.message}</p>
                )}

                <button type="submit" className={classes.button}>Login</button>
            </form>
            <div className={classes.registerContainer}>
                <p>Don't have a shmoozer account?</p>
                <button className={classes.linkButton} 
                  onClick={partial(handleRegister,[navigate])}>
                    Register
                </button>
            </div>
          </div>
        </div>
    </>
  );

}

export { LoginPage }
