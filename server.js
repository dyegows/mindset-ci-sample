const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/sum', (req, res) => {
  //const { a, b } = req.body;
  const a = req.body.a;
  const b = req.body.b;
  const result = a + b;

  res.status(200).send({ result });
});

const server = app.listen(process.env.PORT || 3000, () => console.log('Server running!'));

module.exports = server;