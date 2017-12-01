const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Message = require('./models/message');

app.use(bodyParser.json());

app.get('/api/messages', (req, res) => {
  console.log('received GET request');
  Message.find().then(result => {
    res.send(result);
    console.log('current messages sent');
  });
});

app.post('/api/messages'),
  (req, res) => {
    console.log(req.body);
    let message = new Message({
      user: req.body.user,
      message: req.body.message
    });
  };
app.listen(3001, () => console.log('Example app listening on port 3001!'));
