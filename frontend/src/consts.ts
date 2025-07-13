import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import KibsPage from './pages/KibsPage';
import ShmoozerPage from './pages/ShmoozerPage';
import axios from "axios"; 
 
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const toastifyTimer = 1000; 


export const routes = [ 
    '/',
    '/home',
    '/registration',
    '/kibs',
    '/shmoozer'
];

export const pages = [
    LoginPage,
    HomePage,
    RegistrationPage,
    KibsPage,
    ShmoozerPage
];

