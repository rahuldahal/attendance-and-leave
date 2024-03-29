import Teacher from '../models/Teacher';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export async function createTeacher(data) {
  try {
    return await Teacher.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllTeachers({ populateBy }) {
  try {
    if (!populateBy) {
      return await Teacher.find({}).exec();
    }

    return await Teacher.find({}).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await Teacher.findById(id).exec();
    }

    return await Teacher.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneBySubjectId({ subjectId, populateBy }) {
  try {
    console.log({ subjectId });
    return await Teacher.findOne({
      subjects: new ObjectId(subjectId),
    })
      .populate(populateBy)
      .exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneTeacherByUserId({ userId }) {
  try {
    return await Teacher.findOne({ user: userId })
      .populate({
        path: 'subjects',
        populate: {
          path: 'course',
        },
      })
      .populate('user')
      .exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
