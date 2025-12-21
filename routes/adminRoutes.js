import express from "express"
import { addBlog, deleteBlog, editBlog, getAdminPage, getBlogForm, updateBlog } from "../controller/adminController.js"
import isLogin from "../middleware/protectedRoute.js"
import upload from "../middleware/multer.js"
const router = express.Router()

router.get('/', isLogin, getAdminPage)
router.get('/add-blog', getBlogForm)
router.post('/add-blog', upload.single('file'), addBlog)
router.get('/delete-blog/:id', deleteBlog)
router.get('/edit-blog/:id', editBlog)
router.post('/edit-blog/:id', upload.single('file'), updateBlog)

export default router