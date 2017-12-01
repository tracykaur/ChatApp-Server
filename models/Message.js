const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Message = db.model('Message', {
  user: { type: String },
  content: { type: String },
  ip: { type: String }
});

module.exports = Message;
