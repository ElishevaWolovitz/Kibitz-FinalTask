import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { KibType } from "../../types/kib.types";
import { handleError } from "../../functions";
import { map, filter, includes} from 'lodash/fp';
import { kibsRoute } from "./consts";
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";

export const doLogout = (logout: ()=>void, navigate: (route: string)=>void) => {
  logout();
  navigate("/");
}

export const getKibs = async(
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  api: AxiosInstance) => {
    setLoading(false);
    const kibs = await api.get(`${kibsRoute}`,{})
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
    if(shmoozerId != editedKib.shmoozerId) {
      toast.error("You can only edit your own kibs.");
      return null;
    }
    const { _id, ...kibData } = editedKib;
    const updatedKibResults = await api
      .patch(`${kibsRoute}/${editedKib._id}`,
        kibData,
        {headers:{
          "x-shmoozerid": shmoozerId}})
      .catch(handleError("Failed to update kib. Please try again."));
    if (updatedKibResults) {
      setKibs(map(findAndEditKib(editedKib)));
      toast.success("Kib updated successfully!");
    }
};

const findKibToDeleteById = (kibToDelete: KibType) => (kib: KibType) =>
  kib._id !== kibToDelete._id

export const deleteKib = async (
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  kibs: KibType[],
  shmoozerId: string|null,
  kibToDelete: KibType) => {
    if(shmoozerId != kibToDelete.shmoozerId) {
      toast.error("You can only delete your own kibs.");
      return null;
    }
    const deleteKibResults = await api
    .delete(`${kibsRoute}/${kibToDelete._id}`,
      {headers:{
        "x-shmoozerId": shmoozerId}})
      .catch(handleError("Failed to delete kib. Please try again."));
    if(deleteKibResults) {
      setKibs(filter(findKibToDeleteById(kibToDelete))(kibs));
      toast.success("Kib deleted successfully!");
    }
};

const findKibNameIncludesQuery = (query: string) => (kib: KibType) =>
  includes(query)(kib.kibName);

export const filterKibsByName = (kibs: KibType[], query: string) => {
  if (!query) 
    return kibs;
  return filter(findKibNameIncludesQuery(query))(kibs);
}

const appendKib = (newKib: KibType) => 
  (kibs: KibType[]) => [...kibs, newKib];

export const createNewKib = async (
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  kibDataToCreate: KibType) => {
    const createNewKibResults = await api
      .post(`${kibsRoute}`, kibDataToCreate)
      .catch(handleError("Failed to create new kib. Please try again."));
    if(createNewKibResults){
      const newKib = createNewKibResults.data.data; 
      setKibs(appendKib(newKib));
      toast.success("New kib created successfully!");
    }
}