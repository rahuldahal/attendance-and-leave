import express from 'express';

const app = express();

// ways to submit data to the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup routers

app.use('/', (req, res) => res.json({ message: 'Sample success message' }));

export default app;
