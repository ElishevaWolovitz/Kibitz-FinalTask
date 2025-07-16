import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import KibEditModal from '../../structures/modals/EditKibModal';
import KibCreateNewModal from '../../structures/modals/CreateNewKibModal';
import List from '../../components/List';
import type { KibType } from '../../types/kib.types';
import { 
  doLogout, 
  getKibs, 
  editKib, 
  deleteKib, 
  filterKibsByName, 
  createNewKib,
  checkLoggedInShmoozerForKib
} from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';
import { toastifyTimer } from '../../consts';
import { partial } from 'lodash/fp';
import { CreateNewItemButtonStyles } from '../../components/Button/CreateNewItemButton/styles';
import PrintKib from '../../structures/prints/PrintKib';
import { api } from '../../consts';
import LogoutButton from '../../components/Button/LogoutButton';
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from '@tanstack/react-query';


const KibsPage = () => {
  //const [kibs, setKibs] = useState<KibType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  //const [loading, setLoading] = useState(true);
  const [filteredKibs, setFilteredKibs] = useState<KibType[]>([])
  const classes = Styles();
  const createNewItemButtonClasses = CreateNewItemButtonStyles();
  const { logout, shmoozerId } = useShmoozerName();
  const navigate = useNavigate();
  // useEffect(() => {
  //   getKibs(setKibs, setLoading, api);
  // }, [api]);
  const {
    data: kibs = [],
    isLoading,
  } = useQuery<KibType[]>({
    queryKey: ["kibs"],
    queryFn: () => getKibs(api),
  });
  const queryClient = useQueryClient();
  return (
    <>
      <ToastContainer autoClose={toastifyTimer}/>
      <div className={classes.topBar}>
        <Navbar />
        <LogoutButton onClick={partial(doLogout, [logout, navigate])}/>
      </div>
      <div className={classes.pageContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>Kibs Page</h1>
        </div>
        {isLoading ? (<Spinner />) : (
          <>
            <SearchBar 
              items={kibs}
              filterItems={filterKibsByName}
              setFilteredItems={setFilteredKibs}
              />
            <List 
                items={filteredKibs}
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

export { KibsPage }