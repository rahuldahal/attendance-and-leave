import morgan from 'morgan';
import express from 'express';
import coursesRouter from './routers/courses';
import subjectsRouter from './routers/subjects';
import teachersRouter from './routers/teachers';
import studentsRouter from './routers/students';
import attendancesRouter from './routers/attendances';

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
app.use('/students', studentsRouter);
app.use('/attendances', attendancesRouter);

export default app;
