require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Message = require('./models/Message');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.get('/api/messages', (req, res) => {
  console.log('received GET request');
  Message.find()
    .then(result => {
      res.send(result.reverse());
      console.log('current messages sent');
    })
    .catch(error => {
      console.log(error);
    });
});

app.post('/api/messages', (req, res) => {
  const ip = req.connection.remoteAddress;
  console.log(req.body);
  let message = new Message({
    user: req.body.user,
    content: req.body.content,
    ip: ip
  });

  message.save((err, message) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Message created');
    }
    res.send(message);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
