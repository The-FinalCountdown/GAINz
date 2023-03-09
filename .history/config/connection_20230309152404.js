const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB'mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;