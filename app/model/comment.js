var sql = require('./db')
const User = require('./user')

var Comment = function (comment) {
  this.comment = comment.comment
  ;(this.parent = null),
  (this.author = comment.author),
  (this.created_at = new Date())
}

// Creates a Comment

Comment.createComment = (newComment, result) => {
  sql.query('INSERT INTO comments set ?', newComment, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null)
    } else {
      // console.log(res);
      result(null, res)
    }
  })
}

// Gets comment by User
Comment.getCommentByUser = (userId, result) => {
  sql.query(
    'SELECT * FROM `comments` WHERE `author` = ?',
    [userId],
    (err, res) => {
      if (err) {
        // console.log("error: ", err);
        result(err, null)
      } else {
        // console.log(res);
        result(null, res)
      }
    }
  )
}

// Edit Comment By Id
Comment.editById = (id, comment, result) => {
  sql.query(
    'UPDATE comments SET comment = ? WHERE id = ?',
    [comment.comment, id],
    (err, res) => {
      if (err) {
        // console.log("error: ", err);
        result(err, null)
      } else {
        result(null, res)
      }
    }
  )
}

// Deleting Comment
Comment.remove = function (id, result) {
  sql.query('DELETE FROM comments WHERE id = ? ', id, (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// Gets the role of the author
Comment.getAuthor = function (id, result) {
  sql.query('Select author from comments where id = ?', [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      let authorId = res[0].author
      // Get the Author ID
      // result(null,res);
      User.getUser(authorId, (err, user) => {
        if (err) {
          result(err, null)
        } else {
          // let user = users[0];
          result(null, user)
        }
      })
    }
  })
}

module.exports = Comment
