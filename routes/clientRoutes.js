import expess from "express"
import { getClientPage } from "../controller/clientController.js"
const router = expess.Router()

router.get('/', getClientPage)

export default router