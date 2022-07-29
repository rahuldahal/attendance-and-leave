import morgan from 'morgan';
import express from 'express';
import coursesRouter from './routers/courses';
import subjectsRouter from './routers/subjects';
import teachersRouter from './routers/teachers';

const app = express();

// ways to submit data to the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// morgan http logger
app.use(morgan('combined'));

// setup routers

app.use('/courses', coursesRouter);
app.use('/subjects', subjectsRouter);
app.use('/teachers', teachersRouter);

export default app;
