const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;