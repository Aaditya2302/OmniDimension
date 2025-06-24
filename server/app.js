import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDB from './db/db.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';

const app = express();

connectToDB();

app.use(cors({
    origin: 'https://omni-dimension-zeta.vercel.app/', 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('Hello World!');
})
app.use('/users', userRoutes);

export default app;