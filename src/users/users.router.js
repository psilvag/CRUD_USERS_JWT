const router = require('express').Router()
const userServices = require('./users.services')
const passportJWT=require('../middleware/auth.middleware')




router.get("/", userServices.getAllUsers) 
router.post("/", userServices.postUser) 
 
router.get("/:id", userServices.getUserById) 
router.patch('/:id', passportJWT.authenticate('jwt',{session:false}), userServices.patchUser) 
router.delete('/:id',passportJWT.authenticate('jwt',{session:false}), userServices.deleteUser) 

module.exports = router