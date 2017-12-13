const mongoose = require('mongoose');
const db = mongoose.connect(
  process.env.DB_ADDRESS,
  {
    useMongoClient: true
  },
  error => console.log(error)
);
mongoose.Promise = Promise;

module.exports = { mongoose, db };
