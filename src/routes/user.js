import { getUsers } from '../controllers/user'
import wrap from '../utils/asyncHandler'

const routes = (app) => {
  app
    .route(`${process.env.BASE_PATH}/users`)
    .get(wrap(getUsers))
}

export default routes
