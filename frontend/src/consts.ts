import HomePage from './pages/HomePage';
import KibsPage from './pages/KibsPage';
import axios from "axios"; 
 
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const toastifyTimer = 1000; 


export const routes = [ 
    '/',
    'register',
    'home',
    'kibs',
    'shmoozer'];

export const pages = [
    HomePage,
    KibsPage
];