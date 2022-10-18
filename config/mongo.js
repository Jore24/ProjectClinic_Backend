const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        },
        (err, res) => {
            if (!err) {
                console.log('MongoDB Connection Succeeded.');
            } else {
                console.log('Error in DB connection : ' + err);
            }
        }
    );
};
                

module.exports = dbConnect;