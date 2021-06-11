import { 
  signup,
  login,
  test,
} from '../controllers/user'
import wrap from '../utils/asyncHandler'
const routes = (app) => {
  app
    .route(`${process.env.BASE_PATH}/signup`) 
    .post(wrap(signup))
  app
    .route(`${process.env.BASE_PATH}/login`) 
    .post(wrap(login))
  app
    .route(`${process.env.BASE_PATH}/test`) 
    .get(wrap(test))
}

export default routes
