const {Router}=require('express')
const { home, register, login } = require('../controllers/logic')
const match = require('../middleware/middleware')
const router=Router()

router.get('/',match,home)
router.post('/register',register)
router.post("/login",login)

module.exports=router