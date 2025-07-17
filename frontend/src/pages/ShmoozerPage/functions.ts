import type { AxiosInstance } from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from "../../functions";
import { shmoozerRoute } from './consts';
import { kibsRoute } from '../KibsPage/consts';
import type { ShmoozerType } from "../../types/shmoozer.types";
import type { KibType } from "../../types/kib.types";

export const getShmoozer = async(
  api: AxiosInstance,
  shmoozerId: string|null): Promise<ShmoozerType> => {
    const shmoozerResponse = await api.get(`${shmoozerRoute}/${shmoozerId}`)
    .catch(handleError("Failed to get shmoozer from database"))
    return shmoozerResponse?.data.data; 
}

export const getKibsForShmoozer = async(
  api: AxiosInstance,
  shmoozerId: string|null): Promise<KibType[]> => {
    const kibsForShmoozerResponse = await api.get(`${kibsRoute}${shmoozerRoute}/${shmoozerId}`,{})
        .catch(handleError("Failed to get kibs from database"))
    return kibsForShmoozerResponse?.data.data;
}
