import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from '../../consts';
import Navbar from '../../components/Navbar';
import type { ShmoozerType } from '../../types/shmoozer.types';
import { getShmoozer, getKibsForShmoozer } from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';
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
  checkLoggedInShmoozerForKib
} from '../KibsPage/functions';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const ShmoozerPage = () => {
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const { shmoozerName, shmoozerId } = useShmoozerName();
  const classes = Styles();
  const createNewItemButtonClasses = CreateNewItemButtonStyles();
  const { logout } = useShmoozerName();
  const navigate = useNavigate();
  const onLogout = () => {
      logout();
      navigate("/");
    };
  const {
    data: shmoozer,
    isLoading,
  } = useQuery<ShmoozerType>({
    queryKey: ["shmoozer"],
    queryFn: () => getShmoozer(api, shmoozerId ?? null),
  });
  const {
    data: kibs = [],
  } = useQuery<KibType[]>({
    queryKey: ["kibs", shmoozerId],
    queryFn: () => getKibsForShmoozer(api, shmoozerId ?? null),
  });
  const queryClient = useQueryClient();

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
            <div className={classes.header}>
                <div className={classes.avatar} />
                <span className={classes.displayName}>
                    {shmoozer?.displayName}
                </span>
            </div>
            <span className={classes.id}>
                ID: {shmoozer?._id}
            </span>
          </div>
          {isLoading ? 
            (
              <Spinner />
            ) : ( 
            <>
                  <List 
                    items={kibs}
                    ItemPrint={PrintKib}
                    checkLoggedInUserForPost={checkLoggedInShmoozerForKib}
                    editItem={partial(editKib, [api, queryClient, shmoozerId? shmoozerId : null])}
                    deleteItem={partial( deleteKib, [api, queryClient, kibs, shmoozerId? shmoozerId : null])}
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
                      createNewItem={partial(createNewKib, [api, queryClient])}
                    />
                  )}
            </>
          )}
      </div>
    </>
  )
}

export { ShmoozerPage }
