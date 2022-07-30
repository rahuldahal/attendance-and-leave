import Leave from '../models/Leave';

export async function createLeave(data) {
  try {
    return await Leave.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
