import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from "../../functions";

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

