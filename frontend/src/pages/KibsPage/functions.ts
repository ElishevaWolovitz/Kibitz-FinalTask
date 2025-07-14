import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { KibType } from "../../types/kib.types";
import { handleError } from "../../functions";
import { map, filter, includes} from 'lodash/fp';
import { route } from "./consts";
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";

export const getKibs = async(
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  api: AxiosInstance) => {
    setLoading(false);
    const kibs = await api.get(`${route}`,{})
        .catch(handleError("Failed to get kibs from database"))
    if(kibs)
      setKibs(kibs.data.data);
      setLoading(false);
}
export const checkLoggedInShmoozerForKib = (kib: KibType) => {
  const { shmoozerId } = useShmoozerName();
  if (shmoozerId != kib.shmoozerId) {
    return false;
  }
  return true;
}
const findAndEditKib = (editedKib: KibType) => (kib: KibType) =>
  kib._id === editedKib._id ? { ...kib, ...editedKib } : kib;

export const editKib = async (
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  shmoozerId: string|null,
  editedKib: KibType) => {
    console.log("in edit kib function and shmoozerName context is:", shmoozerId);
    if(shmoozerId != editedKib.shmoozerId) {
      toast.error("You can only edit your own kibs.");
      return null;
    }
    const { _id, ...kibData } = editedKib;
    const updatedKibResults = await api.patch(`${route}/${editedKib._id}`,
      kibData,
      {headers:{
        "x-shmoozerId": shmoozerId
      }})
    .catch(handleError("Failed to update kib. Please try again."));
    if (updatedKibResults)
      {
        //convert prev.map to functional programing style
        setKibs(map(findAndEditKib(editedKib)));
        toast.success("Kib updated successfully!");
        console.log("Kib updated!");
      }
    };


const findKibToDeleteById = (kibToDelete: KibType) => (kib: KibType) =>
  kib._id !== kibToDelete._id

export const deleteKib = async (
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  kibs: KibType[],
  kibToDelete: KibType) => {
  const { shmoozerId, shmoozerName } = useShmoozerName();
  if(shmoozerId != kibToDelete.shmoozerId) {
    toast.error("You can only delete your own kibs.");
    return null;
  }
  const deleteKibResults = await api.delete(`${route}/${kibToDelete._id}`,
    {headers:{
        "x-shmoozerName": shmoozerName
      }}
  )
    .catch(handleError("Failed to delete kib. Please try again."));
  if(deleteKibResults) {
    setKibs(filter(findKibToDeleteById(kibToDelete))(kibs));
    console.log(`Deleted kib with id: ${kibToDelete._id}`);
    toast.success("Kib deleted successfully!");
  }
};
const findKibNameIncludesQuery = (query: string) => (kib: KibType) =>
  includes(query)(kib.kibName);

export const filterKibsByName = (kibs: KibType[], query: string) => {
  if (!query) return kibs;
  return filter(findKibNameIncludesQuery(query))(kibs);
}

const appendKib = (newKib: KibType) => (kibs: KibType[]) => [...kibs, newKib];

export const createNewKib = async (
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  kibDataToCreate: KibType) => {
    const createNewKibResults = await api.post(`${route}`, kibDataToCreate).catch(handleError("Failed to create new kib. Please try again."));
  if(createNewKibResults){
      const newKib = createNewKibResults.data.data; 
      setKibs(appendKib(newKib));
      console.log("New kib created:", newKib);
      toast.success("New kib created successfully!");
  }
}