import config from '../../config'
import { IUser } from './users.interface'
import User from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const id = await generateUserId()

  user.id = id

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('User could not be created')
  }

  return createdUser
}

export default { createUser }
