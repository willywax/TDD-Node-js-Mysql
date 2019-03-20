const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.get('/:',userController.get_user);
router.post('/',userController.create_user);
router.post('/login',userController.log_in_user);



module.exports = router;