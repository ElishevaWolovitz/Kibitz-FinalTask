import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import axios from "axios"; 
 
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const toastifyTimer = 1000; 


export const routes = [ 
    '/',
    '/home'];

export const pages = [
    LoginPage,
    HomePage
];