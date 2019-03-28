var Comment = require('../model/comment')

// Create Comment
exports.create_a_comment = (req, res) => {
  var new_comment = new Comment(req.body)

  // console.log(new_comment)
  if (!new_comment.comment || !new_comment.author) {
    res.status(404).json({
      error: true,
      message: 'Please provide comment details'
    })
  } else {
    Comment.createComment(new_comment, (err, comment) => {
      if (err) {
        res.error(err)
      }
      res.status(201).json(comment)
    })
  }
}

// Updates a Comment
exports.update_a_comment = function (req, res) {
  // console.log(req)
  Comment.editById(req.params.id, req.body, (err, comment) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).json({
      affectedRows: comment.affectedRows
    })
  })
}

exports.get_comment_by_user = function (req, res) {
  // console.log(req.method)
  Comment.getCommentByUser(req.params.userId, function (err, comment) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(comment)
  })
}

// Deletes a Comment
exports.delete_a_comment = function (req, res) {
  Comment.remove(req.params.id, function (err, comment) {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).json({
      message: 'Comment successfully deleted'
    })
  })
}
