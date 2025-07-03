import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import shmoozerRoutes from './shmoozer/shmoozer.router';
import kibRoutes from './kib/kib.router';
import commentRoutes from './comment/comment.router';


dotenv.config();
const app:  Application = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,             
}));
const PORT: number = parseInt(process.env.PORT || '3000', 10); 
const mongoDBURL: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/KibitzFinalDB';

app.use(express.json());
app.use('/shmoozers', shmoozerRoutes);
app.use('/kibs', kibRoutes);
app.use('/comments', commentRoutes);

const startServer = () => {
    mongoose.connect(mongoDBURL)
    console.log('DB Connection Successful');
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};

startServer();


