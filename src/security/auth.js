import jwt from 'jsonwebtoken'

export const authenticate = async (req, res, next) => {

  const authHeader = req.headers.authorization
  if (authHeader) {
    const accessToken = authHeader.split(' ')[1]
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) return res.sendStatus(401)
      req.user = user
      next()
    })
  } else if (req.method == 'POST' && req.path == '/user') 
    next()
  else res.sendStatus(401)
}


