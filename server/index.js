const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/', (req, res) => {
	res.send();
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  const greeting = `Hi ${name}, congrats on your creating your first frontend application and server!`;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting }));
});

app.listen(3001, () =>
  console.log('Express server is running on port 3001')
);