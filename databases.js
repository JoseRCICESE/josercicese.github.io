const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || 'mongodb+srv://dbUser:s3cr3t@cluster0.hsljv.mongodb.net/databasetest?retryWrites=true&w=majority'
//const URI = 'mongodb://localhost/finalDB'
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is connected');
});