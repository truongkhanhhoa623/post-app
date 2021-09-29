const express = require('express');
const router = express.Router()
const postsController = require('../app/controller/PostController')

router.get('/create', postsController.create)
router.post('/store', postsController.store)
router.get('/:id/edit', postsController.edit)
router.put('/:id', postsController.update)
router.delete('/:id', postsController.delete)
router.get('/:slug', postsController.show)


module.exports = router 