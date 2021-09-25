const express = require('express');
const router = express.Router()
const postsController = require('../app/controller/PostController')


router.get('/', postsController.index)

module.exports = router 