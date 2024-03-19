const express = require('express')
const router = express.Router()
const { createUser, deleteUser } = require('../controllers/userController')


router.post('/createuser',createUser);
router.delete("/deleteuser/:id", deleteUser);
// router.post("/thisuser", useController.createNewUser);

module.exports = router