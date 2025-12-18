import express from "express"
import { getAdminPage } from "../controller/adminController.js"
import isLogin from "../middleware/protectedRoute.js"
const router = express.Router()

router.get('/', isLogin, getAdminPage)

export default router