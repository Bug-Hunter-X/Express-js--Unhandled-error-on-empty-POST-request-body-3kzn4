const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling if req.body is empty
  console.log(user.name); //Error: Cannot read properties of undefined (reading 'name')
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));