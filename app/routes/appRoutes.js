
const express = require('express');
const router = express.Router();


const todoList = require('../controller/appController');

router.get('/', todoList.list_all_tasks);
router.post('/', todoList.create_a_task);
router.get('/:id', todoList.read_a_task);
router.put('/:id', todoList.update_a_task);
router.delete('/:id', todoList.delete_a_task);


module.exports = router;

