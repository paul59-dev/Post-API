const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(
            process.env.MONGO_URI, 
            {
                bufferCommands: false, // Disable buffering
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log("Mongo connected")

    } catch(err) {
        console.log("Error connecting to Mongo : " + err);
        process.exit();
    }
}

module.exports = connectDB;