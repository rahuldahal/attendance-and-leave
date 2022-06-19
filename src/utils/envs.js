import { config } from 'dotenv';

config();

const envs = {
  port: process.env.PORT,
  dbURI: process.env.DB_URI,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
};

export default envs;
