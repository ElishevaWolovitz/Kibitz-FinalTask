import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import KibEditModal from '../../structures/modals/EditKibModal';
import KibCreateNewModal from '../../structures/modals/CreateNewKibModal';
import List from '../../components/List';
import type { KibType } from '../../types/kib.types';
import { getKibs, 
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

const KibsPage = () => {
  const [kibs, setKibs] = useState<KibType[]>([]);
  const [openCreateNewModal, setOpenCreateNewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filteredKibs, setFilteredKibs] = useState<KibType[]>([])
  const classes = Styles();
  const createNewItemButtonClasses = CreateNewItemButtonStyles();
  const { logout, shmoozerId } = useShmoozerName();
  const navigate = useNavigate();
  const onLogout = () => {
      logout();
      navigate("/");
    };
  useEffect(() => {
    getKibs(setKibs, setLoading, api);
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
          <h1 className={classes.title}>Kibs Page</h1>
        </div>
        {loading ? (<Spinner />) : (
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
                editItem={partial(editKib, [api, setKibs, shmoozerId? shmoozerId : null])}
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

export { KibsPage }