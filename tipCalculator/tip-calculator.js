const express = require('express');
const app = express();

// Route for the /tip URL with two parameters
app.get('/tip/:total/:tipPercentage', (req, res) => {
  // Extract parameters from the request
  const { total, tipPercentage } = req.params;

  // Calculate the tip based on total and tipPercentage
  const tip = (parseFloat(total) * parseFloat(tipPercentage)) / 100;

  // Send the tip amount as a response
  res.send(`Tip amount: ${tip}`);
});

// Server listens on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
