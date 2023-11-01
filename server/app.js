const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  console.log(req);
  res.send('hello');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
