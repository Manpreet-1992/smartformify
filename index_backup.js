const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to SmartFormify backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SmartFormify server running on port ${PORT}`);
});
