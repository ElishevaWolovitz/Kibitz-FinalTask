import { Styles } from './styles';

const Spinner = () => {
  const classes = Styles();
  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.spinner} />
    </div>
  );
};

export { Spinner };