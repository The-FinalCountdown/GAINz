const mon= require('mongoose');
connect('mongodb://localhost/gainz',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports=connection;