const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO'mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;