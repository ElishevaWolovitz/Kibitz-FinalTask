import type { ShmoozerType } from "../../types/shmoozer.types";
import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError } from "../../functions";

export const getShmoozer = async(
  setShmoozer: React.Dispatch<React.SetStateAction<ShmoozerType>>,
  shmoozerName: string|null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  api: AxiosInstance) => {
    const shmoozer = await api.get(`/shmoozer/${shmoozerName}`).catch(
      handleError("Failed to get shmoozer from database"))
    if(shmoozer)
      setShmoozer(shmoozer.data.data);
      setLoading(false);
}

const appendShmoozer = (newShmoozer: ShmoozerType) => (shmoozers: ShmoozerType[]) => 
  [...shmoozers, newShmoozer]

export const createNewShmoozer = async (
  api: AxiosInstance,
  setShmoozers: React.Dispatch<React.SetStateAction<ShmoozerType[]>>,
  shmoozerDataToCreate: ShmoozerType) => {
    const createNewShmoozerResults = await api.post("/shmoozer", shmoozerDataToCreate)
    .catch(handleError("Failed to create new shmoozer. Please try again."));
  if (createNewShmoozerResults) {
    const newShmoozer = createNewShmoozerResults.data.data; 
    setShmoozers(appendShmoozer(newShmoozer));
    console.log("New shmoozer created:", newShmoozer);
    toast.success("New shmoozer created successfully!");
  } 
}

