const express = require('express');
const router = express.Router();

const commentController = require('../controller/comment');

router.get('/user/:userId',commentController.get_comment_by_user);
router.post('/',commentController.create_a_comment);
router.delete('/:id',commentController.delete_a_comment);
router.put('/:id',commentController.update_a_comment);


module.exports = router;
