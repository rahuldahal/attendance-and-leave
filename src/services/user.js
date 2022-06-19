import User from '../models/User';

export async function createUser(data) {
  try {
    return await User.create(data);
  } catch (e) {
    throw new Error(e);
  }
}
