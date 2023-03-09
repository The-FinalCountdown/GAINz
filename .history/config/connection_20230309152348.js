const mongoose = require('mongoose');

mongoose.connect(
    process'mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;