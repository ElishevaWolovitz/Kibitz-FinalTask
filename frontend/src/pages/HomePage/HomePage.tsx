import Navbar from '../../components/Navbar';
import { useNavigate } from "react-router-dom";
import { Styles } from './styles';
import LogoutButton from '../../components/Button/LogoutButton';
import { useShmoozerName } from "../../contexts/ShmoozerNameContext/ShmoozerNameContext";
import { ToastContainer} from 'react-toastify';
import { toastifyTimer } from '../../consts'

const HomePage = () => {
  const { logout, shmoozerName} = useShmoozerName();
  const navigate = useNavigate();
  const classes = Styles();
  const onLogout = () => {
      logout();
      navigate("/");
    };
  return (
    <>
      <ToastContainer autoClose={toastifyTimer}/>
      <div className={classes.container}>
        <div className={classes.logoutButton}>
          <LogoutButton onClick={onLogout}/>
        </div>
        <h1 className={classes.title}>Home Page</h1>
        <div className={classes.subtitle}>Welcome {shmoozerName} to Kibitz - your Twitter-inspired app!</div>
        <div className={classes.navbarOverride}>
          <div className={classes.buttonGroup}>
              <Navbar />
          </div>
        </div>
      </div>
    </>
  )
}

export { HomePage }
