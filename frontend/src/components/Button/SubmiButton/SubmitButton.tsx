import { Styles } from './styles';

const SubmitButton = () => {
    const classes = Styles();
    return (
        <button type="submit" className={classes.button}>
            Submit
        </button>
    );
}

export { SubmitButton };