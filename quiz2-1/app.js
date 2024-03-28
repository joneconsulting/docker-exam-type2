var express = require('express');
var app = express();

app.get('/greeting', (req, res) => {
  res.status(200).json({
    message: `Hello, ${req.query.name}!`
  });
});

app.listen(3000, () => {
  console.log(`Example app for CI/CD listening on port 3000`)
})
