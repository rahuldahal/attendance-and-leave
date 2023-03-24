import User from '../models/User';
import { ONE_DAY } from '../constants/date';
import isEmail from 'validator/lib/isEmail';
import { loginUser, updateLastLogin } from '../services/user';
import { signAccessToken } from '../utils/jwt';
import { StatusCodes } from 'http-status-codes';
import { isEmpty, isString } from '../utils/string';
import { LoginErrors } from '../constants/validationErrors';
import userRoles from '../constants/userRoles';
import { getOneTeacherByUserId } from '../services/teacher';
import { getOneStudentByUserId } from './students';
import { getOneHodByUserId } from './hods';

export async function signOutHandler(req, res) {
  res.cookie('accessToken', '', { expires: new Date(0) });

  return res.sendStatus(StatusCodes.OK);
}

export async function loginHandler(req, res) {
  const { email, password } = req.body;
  if (isEmpty(email) || isEmpty(password)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['email', 'password'],
        message: LoginErrors.NO_EMAIL_PASSWORD,
      },
    });
  }
  if (!isEmail(email)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['email'],
        message: LoginErrors.NOT_VALID_EMAIL_TYPE,
      },
    });
  }
  if (!isString(password)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['password'],
        message: LoginErrors.NOT_VALID_PASSWORD_TYPE,
      },
    });
  }

  // authenticate user
  const user = await User.prototype.doesEmailExist(email);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        fields: ['email'],
        message: LoginErrors.EMAIL_NOT_REGISTERED,
      },
    });
  }
  const isPasswordValid = await User.prototype.validatePassword(
    password,
    user.password
  );
  if (!isPasswordValid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: {
        fields: ['password'],
        message: LoginErrors.INCORRECT_PASSWORD,
      },
    });
  }

  const { _id, fullName, role } = await loginUser({ email });
  const accessToken = signAccessToken({ _id, fullName, role });

  await updateLastLogin({ email });

  return res
    .status(StatusCodes.ACCEPTED)
    .cookie('accessToken', accessToken, {
      expires: new Date(Date.now() + ONE_DAY),
      httpOnly: true,
      sameSite: false,
    })
    .end();
}

export async function sendAuthInfo(req, res) {
  const { payload } = req;
  const { _id: userId, role } = payload;

  const { hod, teacher, student } = userRoles;

  console.log(role, teacher);

  const authStatus = {
    isAuthenticated: true,
    userId,
    role,
  };

  try {
    switch (role) {
      case teacher:
        const { _id: teacherId, user: teacherInfo } =
          await getOneTeacherByUserId({ userId });
        authStatus.teacherId = teacherId;
        authStatus.picture = teacherInfo.picture;
        break;

      case hod:
        const { _id: hodId, user: hodInfo } = await getOneHodByUserId({
          userId,
        });
        authStatus.hodId = hodId;
        authStatus.picture = hodInfo.picture;
        break;

      case student:
        const {
          _id: studentId,
          course,
          semester,
          user: studentInfo,
        } = await getOneStudentByUserId({ userId });
        authStatus.studentId = studentId;
        authStatus.picture = studentInfo.picture;
        authStatus.courseId = course._id;
        authStatus.semester = semester;
        break;
    }

    res.status(StatusCodes.OK).json({ authStatus });
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
}
