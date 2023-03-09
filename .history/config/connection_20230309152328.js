const mongoose = require('mongoose');

mongooseconnect('mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;