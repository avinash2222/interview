import { 
  signup,
  login,
} from '../controllers/user'
import wrap from '../utils/asyncHandler'
const routes = (app) => {
  app
    .route(`${process.env.BASE_PATH}/signup`) 
    .post(wrap(signup))
  app
    .route(`${process.env.BASE_PATH}/login`) 
    .post(wrap(login))
}

export default routes
