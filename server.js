const express = require('express');
const path = require('path');
const config = require('./config');


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

/**
 * APIs and other request handlers
 * All api handlers should originate from '/api' path
 */


app.get('/api', (req, res) => {
  res.json({ d1: 'dan', d2: config.ENV });
});

/**
 * Send index.html if no path was matched
 */

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(config.PORT, () => {
  console.log(`Express listening on port ${config.PORT}. Enviroment is ${config.ENV}. Press CTRL + C to terminate.`);
});
