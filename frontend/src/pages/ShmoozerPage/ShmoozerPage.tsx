import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from './consts';
import Navbar from '../../components/Navbar';
import type { ShmoozerType } from '../../types/shmoozer.types';
import { getShmoozer } from './functions';
import Spinner from '../../components/Spinner';
import { Styles } from './styles';
import PrintShmoozer from '../../structures/prints/PrintShmoozer';
import { api } from '../../consts';
import Card from '../../components/Card';
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";

const ShmoozerPage = () => {
  const [shmoozer, setShmoozer] = useState<ShmoozerType>({} as ShmoozerType);
  const [loading, setLoading] = useState(true);
  const { shmoozerName, shmoozerId } = useShmoozerName();
  const classes = Styles();
  
  useEffect(() => {
    getShmoozer(setShmoozer,  shmoozerId ?? null, setLoading, api)
  }, [api]); 

  return (
    <>
      <ToastContainer autoClose={toastifyTimer}/>
      <Navbar />
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
          </>
        )}
      </div>
    </>
  )
}

export { ShmoozerPage }
