import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleError = (message: string) => (error: unknown) => {
    if (error instanceof Error) {
        console.error(`${message}:`, error.message);
    } else {
        console.error(`${message}:`, error);
    }
    toast.error(message);
};