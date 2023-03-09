const mongoose = require('mongoose');

mongoose.connect(
    pro'mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;