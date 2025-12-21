import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true
    }
})

const Blog = new mongoose.model('Blog', blogSchema)
export default Blog