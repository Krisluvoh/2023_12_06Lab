const express = require('express');
const app = express();

// Array of Magic 8 Ball responses
const magic8BallResponses = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
  "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
  "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
  "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
  "Don't count on it", "My reply is no", "My sources say no",
  "Outlook not so good", "Very doubtful"
];

// Route for the /magic URL with a parameter
app.get('/magic/:question', (req, res) => {
  // Extract the question from the request parameters
  const { question } = req.params;

  // Choose a random Magic 8 Ball response
  const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];

  // Send the question and Magic 8 Ball response as an HTML response
  res.send(`<h1>Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`);
});

// Server listens on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
