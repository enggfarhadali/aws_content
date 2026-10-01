const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my Node app on ECS!');
});

app.listen(8080, '0.0.0.0', () => {
  console.log('Server running on port 8080');
});
