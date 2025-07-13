import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";
import type { LoginPageFormType } from "./types";
import { Styles } from "./styles";
import { api } from "../../consts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from "../../functions";
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from "../../consts";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginPageFormType>();
  const { login } = useShmoozerName();
  const navigate = useNavigate();
  const classes = Styles();

  const onSubmit = async (data: LoginPageFormType) => {
    const shmoozerName = data.shmoozerName.trim();
    if (!shmoozerName) return;
    const existingShmoozer = await api.get(`/shmoozer/login/${shmoozerName}`)
        .catch(handleError("Error fetching shmoozer:"));
    if (existingShmoozer?.data.data === null) {
      toast.error("Shmoozer not found. Please register first.");
      reset();
      return; 
    }
    login(shmoozerName, existingShmoozer?.data.data._id);
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <>
        <ToastContainer autoClose={toastifyTimer}/>
        <div className={classes.container}>
        <h2>Login to Kibitz</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
            <button className={classes.linkButton} onClick={handleRegister}>Register</button>
        </div>
        </div>
    </>
  );

}

export { LoginPage }
