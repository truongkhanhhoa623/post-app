const express = require('express')
const router = express.Router()
const meController = require('../app/controller/MeController')


router.get('/stored/post', meController.storedPosts)

module.exports = router 