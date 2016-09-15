const express = require('express');
const onFinished = require('on-finished');

const app = express();

app.use((req, res, next) => {

  onFinished(res, function(err, res) {
    console.log('res.statusCode', res.statusCode)
  })

  next()

})

app.get('/', (req, res) => {
  res.sendStatus(204)
});

const PORT = 3000;

const server = app.listen(PORT, (err) => {
  if (err) console.error('Error');
  console.log(`app listening on http://localhost:${PORT}`)
})

module.exports = app;
