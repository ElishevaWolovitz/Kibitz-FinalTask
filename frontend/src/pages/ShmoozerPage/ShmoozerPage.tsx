import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from './consts';
import Navbar from '../../components/Navbar';
import type { ShmoozerType } from '../../types/shmoozer.types';
import { getShmoozer, getKibsForShmoozer } from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';
import PrintShmoozer from '../../structures/prints/PrintShmoozer';
import PrintKib from '../../structures/prints/PrintKib';
import { api } from '../../consts';
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";
import LogoutButton from '../../components/Button/LogoutButton';
import { useNavigate } from "react-router-dom";
import type { KibType } from '../../types/kib.types';
import List from '../../components/List';
import KibEditModal from '../../structures/modals/EditKibModal';
import KibCreateNewModal from '../../structures/modals/CreateNewKibModal';
import { partial } from 'lodash/fp';
import { CreateNewItemButtonStyles } from '../../components/Button/CreateNewItemButton/styles';
import { 
  editKib,
  deleteKib,
  createNewKib,
} from '../KibsPage/functions';

const ShmoozerPage = () => {
  const [shmoozer, setShmoozer] = useState<ShmoozerType>({} as ShmoozerType);
  const [kibs, setKibs] = useState<KibType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { shmoozerName, shmoozerId } = useShmoozerName();
  const classes = Styles();
  const createNewItemButtonClasses = CreateNewItemButtonStyles();
  const { logout } = useShmoozerName();
  const navigate = useNavigate();
  const onLogout = () => {
      logout();
      navigate("/");
    };
  
  useEffect(() => {
    getShmoozer(setShmoozer,  shmoozerId ?? null, setLoading, api)
    getKibsForShmoozer(setKibs, shmoozerId ?? null, setLoading, api);
  }, [api]); 

  return (
    <>
      <ToastContainer autoClose={toastifyTimer}/>
      <div className={classes.topBar}>
        <Navbar />
        <LogoutButton onClick={onLogout}/>
      </div>
      <div className={classes.pageContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>Shmoozer {shmoozerName}'s Page</h1>
        </div>
        {loading ? 
          (
            <Spinner />
          ) : ( 
          <>
            <PrintShmoozer
              item={shmoozer}
            />
            <List 
              items={kibs}
              ItemPrint={PrintKib}
              editItem={partial(editKib, [api, setKibs])}
              deleteItem={partial( deleteKib, [api, setKibs, kibs])}
              EditItemModal={KibEditModal}
            />
            <button type="button"
              className={createNewItemButtonClasses.button}
              onClick={partial(setOpenCreateNewModal, [true])}>
              Create New Kib
            </button>
            {openCreateNewModal && (
              <KibCreateNewModal
                onClose={partial(setOpenCreateNewModal, [false])}
                createNewItem={partial(createNewKib, [api, setKibs])}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}

export { ShmoozerPage }
