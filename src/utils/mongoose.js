const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/fastifycrud')
  .then(() => console.log('MongoDb Connected'))
  .catch(((err) => console.log(err)))