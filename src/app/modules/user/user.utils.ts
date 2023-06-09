import { IAcademicSemester } from '../academicSemester/academicSemester.interface'
import User from './user.model'

export const findLastStudentId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateStudentId = async (academicSemester: IAcademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString().padStart(5, '0')

  //increment by 1

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  incrementedId = `${academicSemester.year.substring(2)}${academicSemester.code}${incrementedId}`

  return incrementedId
}
