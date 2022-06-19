import morgan from 'morgan';
import express from 'express';
import usersRouter from './routers/users';

const app = express();

// ways to submit data to the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// morgan http logger
app.use(morgan('combined'));

// setup routers

app.use('/users', usersRouter);

export default app;
