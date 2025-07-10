import type { ShmoozerType } from "../../types/shmoozer.types";
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from "../../functions";
import { api } from "../../consts";



const createNewShmoozer = async (login: (name:string) => void, 
    naviagte: (path:string)=>void,
    shmoozerDataToCreate: ShmoozerType) => {
        const createNewShmoozerResults = await api.post("/shmoozers", shmoozerDataToCreate)
        .catch(handleError("Shmoozer Name already exsist, please pick another."));
        if (createNewShmoozerResults) {
            const newShmoozer = createNewShmoozerResults.data.data; 
            login(newShmoozer.shmoozerName);
            naviagte('../home');
            console.log("New shmoozer created:", newShmoozer);
        } 
}

export const onSubmit = (login: (name:string) => void, 
    naviagte: (path:string)=>void, newShmoozer: ShmoozerType) => {
        console.log("Submitting new shmoozer:", newShmoozer);
        createNewShmoozer(login, naviagte, newShmoozer);
};

export const onCancel = (naviagte: (path:string)=>void) => {
    naviagte('/');
}
