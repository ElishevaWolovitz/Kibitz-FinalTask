import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from "../../functions";
import type { KibType } from "../../types/kib.types";

export const getShmoozer = async(
  setShmoozer: React.Dispatch<React.SetStateAction<ShmoozerType>>,
  shmoozerId: string|null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  api: AxiosInstance) => {
    const shmoozer = await api.get(`/shmoozer/${shmoozerId}`).catch(
      handleError("Failed to get shmoozer from database"))
    if(shmoozer)
      setShmoozer(shmoozer.data.data);
      setLoading(false); 
}

export const getKibsForShmoozer = async(
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  shmoozerId: string|null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  api: AxiosInstance) => {
    setLoading(false);
    const kibs = await api.get(`/kibs/shmoozer/${shmoozerId}`,{})
        .catch(handleError("Failed to get kibs from database"))
    if(kibs)
      setKibs(kibs.data.data);
      setLoading(false);
}
