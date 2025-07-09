import Navbar from '../../components/Navbar';
import { Styles } from './styles';

const HomePage = () => {
  const classes = Styles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Home Page</h1>
      <div className={classes.subtitle}>Welcome to Kibitz - your Twitter-inspired app!</div>
      <div className={classes.navbarOverride}>
        <div className={classes.buttonGroup}>
            <Navbar />
        </div>
      </div>
    </div>
  )
}

export { HomePage }
