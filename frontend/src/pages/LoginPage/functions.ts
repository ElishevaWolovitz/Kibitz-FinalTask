import type { LoginPageFormType } from "./types";
import { handleError } from "../../functions";
import { api } from "../../consts";
import { toast } from 'react-toastify';
import type { UseFormReset } from "react-hook-form";

export const handleRegister = (navigate: (route: string)=> void) => {
    navigate("/registration");
  };

export const onSubmit = (navigate: (route: string)=>void,
    login: (shmoozerName: string, shmoozerId: string|null)=>void,
    reset: UseFormReset<LoginPageFormType>
    ) => async (data: LoginPageFormType) => {
        const shmoozerName = data.shmoozerName.trim();
        if (!shmoozerName) return;
        const existingShmoozer = await api.get(`/shmoozer/login/${shmoozerName}`)
            .catch(handleError("Error fetching shmoozer:"));
        if (existingShmoozer?.data.data === null) {
            toast.error("Shmoozer not found. Please register first.");
            reset({shmoozerName:''});
            return; 
        }
        login(shmoozerName, existingShmoozer?.data.data._id);
        navigate("/home");
  };