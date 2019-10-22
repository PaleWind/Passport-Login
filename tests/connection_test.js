const mongoose = require('mongoose')

//es6 promises
mongoose.Promise = global.Promise

//connect to db before tests run
before(function(done){
  //connect to mongodb
  mongoose.connect('mongodb://localhost/users_test');

  //like .on but calls one time instead of every time
  mongoose.connection.once('open', function(){
    console.log('Connection has been made');
    done();
  }).on('error', function(error){
    console.log('Connection error:', error);
  });

});

//drop the mariochars collection before each test
beforeEach(function(done){
  //drop collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
