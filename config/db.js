import mongoose from "mongoose"
const MONGO_URI = process.env.MONGO_URI

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully.");
        })
        await mongoose.connect(MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}

export default connectDb