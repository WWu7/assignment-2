// app.js Wilson Wu 301243494 Oct 7th

// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname 
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//import mongoose mondule
import mongoose from 'mongoose';

// Configuration Module
import { MongoURI, Secret } from "../config/config.js";

// Import Router
import indexRouter from './routes/index.route.server.js';
import movieRouter from './routes/movies.route.server.js';
import { waitForDebugger } from "inspector";

// instantiate app-server
const app = express();

// Complete DB config
mongoose.connect(MongoURI);
const db = mongoose.connection;

// listen for connection success or error
db.on('open', ()=> console.log("Connected to MonogDB"));
db.on('error', () => console.log("Mongo connection error"));

// setup ViewEngine EJS
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use Routes
app.use('/', indexRouter);
app.use('/', movieRouter);

// // run app
// app.listen(3000);

// console.log('Server running at http://localhost:3000');

export default app;