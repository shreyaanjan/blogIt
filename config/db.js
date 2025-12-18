import mongoose from "mongoose"
const monogo_URI = process.env.monogo_URI

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected successfully.");
        })
        await mongoose.connect(monogo_URI)
    } catch (error) {
        console.log(error);
    }
}

export default connectDb