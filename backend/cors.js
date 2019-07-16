/**
 * Enabling CORS by setting various headers in each response.
 * @method
 * @param  {Object}   req  the req object
 * @param  {Object}   res  the res object
 * @param  {Function} next next function
 * @return         either send status:200 in case of OPTIONS method or call next middlewares
 */
module.exports = (req, res, next) => {
    console.log("---------------Entering cors----------------")
    // set headers in each response
    res.set({
      'Access-Control-Allow-Origin': '*', // req.header('origin')
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE',
      'Access-Control-Allow-Headers': 'Authorization,Content-Type,Accept,Accept-Language,Content-Encoding,X-Requested-With',
    });
    return next();
  };
  