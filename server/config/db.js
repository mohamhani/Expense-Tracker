const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbConnection = await mongoose.connect("mongodb://localhost/expenseTrackerDB", {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        });

        console.log('Connected to Database'.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;