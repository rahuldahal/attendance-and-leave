import mongoose from 'mongoose';
import envs from './utils/envs';

export default function db() {
  return mongoose.connect(envs.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
