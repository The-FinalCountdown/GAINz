const mongoose = require('mongoose');

mongoose.connect(
    process.env.MON'mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;