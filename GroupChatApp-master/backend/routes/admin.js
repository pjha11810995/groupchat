const express = require('express')
const router = express.Router()
const adminController=require('../controllers/admin')
const authenticateController = require('../authenticate/authenticate')

router.post('/addMember', authenticateController.authenticateToken, adminController.adminCheck, adminController.postAddMember)
router.post('/removeMember', authenticateController.authenticateToken,adminController.adminCheck, adminController.postRemoveMember)
router.post('/makeAdmin', authenticateController.authenticateToken,adminController.adminCheck, adminController.postMakeAdmin)
router.post('/removeAdmin', authenticateController.authenticateToken,adminController.adminCheck, adminController.postRemoveAdmin)


module.exports = router