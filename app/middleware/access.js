const User = require('../model/user')
const Comment = require('../model/comment')

module.exports = (req, res, next) => {
  let method = req.method // Getting Request Method
  Comment.getAuthor(req.params.id, (err, author) => {
    if (err) {
      res.status(401).json({
        error: 'Error Occured' // new Error('Error Getting User!')
      })
    } else {
      if (req.params.userId === author.id) {
        next() // The user can update his / her own comment
      } else {
        User.getUser(req.params.userId, (err, user) => {
          if (err) {
            res.status(401).json({
              error: 'Invalid User' // new Error('Error Getting User!')
            })
          } else {
            // Checking if it's Updating or Deleting
            if (method === 'PUT' && user.role > 2) {
              next() // Allowing Administrator to Update Any Comment
            } else if (method === 'DELETE' && user.role > 1) {
              next() // Allowing Moderator or Administrator To Delete a Comment
            } else {
              res.status(401).json({
                error: 'Access Denied' // new Error('Access Denied!')
              })
            }
          }
        })
      }
    }
  })
}
