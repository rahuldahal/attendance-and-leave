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

export async function deleteUser({ id }) {
  try {
    return await User.findByIdAndDelete(id).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function updateLastLogin({ email }) {
  try {
    return await User.findOneAndUpdate(
      { email },
      { lastLogin: new Date() }
    ).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
