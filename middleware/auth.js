function authorizeUsersAccess(req, res, next) {
    if (req.query.admin === "true") {
      console.log(req.admin)
      next()
    } else {
      res.status(401).send("Access denied")
    }
  }

  module.exports = authorizeUsersAccess;