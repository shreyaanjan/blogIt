import path from "path";
import Blog from "../models/BlogModel.js";
import { fileURLToPath } from "url";
import fs from "fs"

const fileName = fileURLToPath(import.meta.url)
const directoryName = path.dirname(fileName)

const getAdminPage = async (req, res) => {
    try {
        const blogs = await Blog.find({})
        return res.render('index', {
            blogs
        })
    } catch (error) {
        console.log(error);
    }
}

const getBlogForm = (req, res) => {
    try {
        return res.render('addBlog')
    } catch (error) {
        console.log(error);
    }
}

const addBlog = async (req, res) => {
    try {
        if (!req.body.name || !req.body.desc || !req.body.tags || !req.file) {
            return res.send("All fields are required");
        }
        const data = req.body
        const doc = req.file.path

        const blog = {
            ...data, file: doc
        }

        const newBlog = new Blog(blog)
        await newBlog.save()
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        const imgPath = path.join(directoryName, "..", blog.file)

        fs.unlink(imgPath, (err) => {
            console.log(err);
        })

        await Blog.findByIdAndDelete(id)
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}

const editBlog = async (req, res) => {
    try {
        const { id } = req.params
        const editBlog = await Blog.findById(id)
        return res.render('editBlog', {
            editBlog
        })
    } catch (error) {
        console.log(error);
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        const updatedData = req.body

        if (!updatedData.name || !updatedData.desc || !updatedData.tags) {
            return res.send("All fields are required")
        }

        if (req.file) {
            const oldImgPath = path.join(directoryName, "..", blog.file)
            fs.unlink(oldImgPath, (err) => {
                console.log(err);
            })

            const newImgPath = req.file.path
            updatedData.file = newImgPath
        }

        await Blog.findByIdAndUpdate(id, updatedData)
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}

export { getAdminPage, getBlogForm, addBlog, deleteBlog, editBlog, updateBlog }