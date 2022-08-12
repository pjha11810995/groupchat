const express = require('express')
const router=express.Router()
const groupController=require('../controllers/group')
const authenticateController = require('../authenticate/authenticate')



router.post('/creategroup',authenticateController.authenticateToken, groupController.createGroup)
router.get('/getgroups',authenticateController.authenticateToken, groupController.getGroups)
router.get('/isAdmin', authenticateController.authenticateToken, groupController.getIsAdmin)


module.exports=router