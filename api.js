//import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan'; 
import path from 'path';

dotenv.config();

const app = express();
const APP_NAME = process.env.APP_NAME || 'Microservice Boilerplate';
const APP_PORT = process.env.APP_PORT || 3000;
const APP_HOST = process.env.APP_HOST || 'localhost';

app.use(cors({  
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(helmet());
app.use(morgan("dev"));

app.listen(APP_PORT, () =>{
    console.log('Info:', APP_NAME + ' started at ' + APP_HOST + ':' + APP_PORT);
});
