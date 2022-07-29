import morgan from 'morgan';
import express from 'express';
import coursesRouter from './routers/courses';
import subjectsRouter from './routers/subjects';

const app = express();

// ways to submit data to the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// morgan http logger
app.use(morgan('combined'));

// setup routers

app.use('/subjects', subjectsRouter);
app.use('/courses', coursesRouter);

export default app;
