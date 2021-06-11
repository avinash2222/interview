const wrap = (f) => { // Not only wraps async functions, but also provides some error-handling features.  You can also call this for non-async functions if all you want are the error-handling features.
  return function (req, res, next) {
    function errorHandler(err) {
      if(err.name == 'ValidationError'){
        res.status(422).send(err)
      } else if (err.httpResponseCode) {
        if (err.httpResponseCodeText) {
          res.statusMessage = err.httpResponseCodeText
        }
        res.status(err.httpResponseCode)
        if (err.httpResponseJson) {
          res.json(err.httpResponseJson)
        } else if (err.httpResponseBodyText) {
          res.send(err.httpResponseBodyText)
        } else {
          res.end()
        }
      } else {
        next(err)
      }
    }
    let promise
    try {
      promise = f(req, res, next)
      return (!promise || !promise.then) ? promise : promise.catch(errorHandler)
    } catch (err) {
      errorHandler(err)
    }
  }
}

export default wrap
