import User from '../models/User';

export async function createUser(data) {
  try {
    return await User.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function loginUser({ email }) {
  try {
    return await User.findOne({ email }).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
